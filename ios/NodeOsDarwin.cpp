//
//  NodeOsDarwin.m
//  react-native-node-os
//
//  Created by Roman Dzieciol on 9/21/19.
//

#import "NodeOsDarwin.h"

#include <unistd.h>
#include <stddef.h>
#include <time.h>
#include <mach/mach.h>
#include <ifaddrs.h>
#include <net/if.h>

#include <sys/utsname.h>
#include <sys/sysctl.h>        // definitions for top level identifiers, second level kernel and hardware identifiers, and user level identifiers
#include <sys/socket.h>        // definitions for second level network identifiers
#include <netinet/in.h>        // definitions for third level Internet identifiers and fourth level IP identifiers
#include <arpa/inet.h>
#include <sys/types.h>
#include <net/if_dl.h>
#include <system_error>
#include <pwd.h>
#include <bitset>

namespace nodeos {
    
    namespace {
        
        struct kernel_category_impl : std::error_category {
            const char* name() const noexcept override;
            std::string message(int ev) const override;
        };
        
        const char* kernel_category_impl::name() const noexcept {
            return "kernel_category";
        }
        
        std::string kernel_category_impl::message(int ev) const {
            return std::to_string(ev);
        }
    }
    
    const std::error_category& kernel_category() {
        static const struct kernel_category_impl shared_kernel_category {};
        return shared_kernel_category;
    }
    
    std::string GetSockAddrName(struct sockaddr *addr);
    size_t GetBitCount(struct sockaddr *addr);
}


std::string nodeos::GetSockAddrName(struct sockaddr *addr) {
    
    if (!addr) {
        return "";
    }
    
    if (addr->sa_family == AF_INET6) {
        struct sockaddr_in6 sa6 = *((struct sockaddr_in6*) addr);
        char astring[INET6_ADDRSTRLEN];
        inet_ntop(AF_INET6, &(sa6.sin6_addr), astring, INET6_ADDRSTRLEN);
        return astring;
    } else if (addr->sa_family == AF_INET) {
        struct sockaddr_in sa = *((struct sockaddr_in*) addr);
        char astring[INET_ADDRSTRLEN];
        inet_ntop(AF_INET, &(sa.sin_addr), astring, INET_ADDRSTRLEN);
        return astring;
    } else {
        return "";
    }
}

size_t nodeos::GetBitCount(struct sockaddr *addr) {
    if (addr && addr->sa_family == AF_INET6) {
        struct sockaddr_in6 sa6 = *((struct sockaddr_in6*) addr);
        size_t result = 0;
        for (int i=0; i!=16; ++i) {
            result += std::bitset<8>(sa6.sin6_addr.__u6_addr.__u6_addr8[i]).count();
        }
        return result;
    } else if (addr && addr->sa_family == AF_INET) {
        struct sockaddr_in sa = *((struct sockaddr_in*) addr);
        return std::bitset<32>(sa.sin_addr.s_addr).count();
    } else {
        return 0;
    }
}

nodeos::Network::Interfaces nodeos::GetNetworkInterfaces() {
    
    nodeos::Network::Interfaces interfaces;
    
    struct ifaddrs* addrs;
    if (getifaddrs(&addrs) != 0) {
        throw std::system_error(errno, std::generic_category());
    }
    
    for (struct ifaddrs* ent = addrs; ent != NULL; ent = ent->ifa_next) {
        
        if (!((ent->ifa_flags & IFF_UP) && (ent->ifa_flags & IFF_RUNNING)))
            continue;
        
        if (!ent->ifa_addr)
            continue;
        
        std::string name = ent->ifa_name;
        if (name.empty()) {
            continue;
        }
        
        if (!(ent->ifa_addr->sa_family == AF_INET6 || ent->ifa_addr->sa_family == AF_INET)) {
            continue;
        }
        
        nodeos::Network::Interface interface = interfaces[name];
        interface.name = name;
        
        nodeos::Network::Address address;
        
        address.address = nodeos::GetSockAddrName(ent->ifa_addr);
        if (ent->ifa_netmask) {
            address.netmask = nodeos::GetSockAddrName(ent->ifa_netmask);
        }
        address.internal = !!(ent->ifa_flags & IFF_LOOPBACK);
        
        if (ent->ifa_addr->sa_family == AF_INET6) {
            address.family = "IPv6";
        } else if (ent->ifa_addr->sa_family == AF_INET) {
            address.family = "IPv4";
        }
        
        address.cidr = address.address + "/" + std::to_string(GetBitCount(ent->ifa_netmask));
        
        interface.addresses.push_back(address);
        
        if (!interface.addresses.empty()) {
            interfaces[name] = interface;
        }
    }
    
    for (struct ifaddrs* ent = addrs; ent != NULL; ent = ent->ifa_next) {
        
        if (!((ent->ifa_flags & IFF_UP) && (ent->ifa_flags & IFF_RUNNING)))
            continue;
        
        if (!ent->ifa_addr)
            continue;
        
        std::string name = ent->ifa_name;
        auto it = interfaces.find(name);
        if (it == interfaces.end()) {
            continue;
        }
        
        if (ent->ifa_addr->sa_family == AF_LINK) {
            char* mac = link_ntoa((struct sockaddr_dl*)(ent->ifa_addr));
            for (nodeos::Network::Address& address: it->second.addresses) {
                address.mac = mac;
            }
        }
    }
    
    freeifaddrs(addrs);
    return interfaces;
}

std::vector<nodeos::Cpu> nodeos::GetCpus() {
    
    unsigned int ticks = (unsigned int)sysconf(_SC_CLK_TCK);
    unsigned int multiplier = ((uint64_t)1000L / ticks);
    size_t size;
    
    char model[512];
    size = sizeof(model);
    if (sysctlbyname("machdep.cpu.brand_string", &model, &size, NULL, 0) &&
        sysctlbyname("hw.model", &model, &size, NULL, 0)) {
        throw std::system_error(errno, std::generic_category());
    }
    
    uint64_t cpuspeed;
    size = sizeof(cpuspeed);
    if (sysctlbyname("hw.cpufrequency", &cpuspeed, &size, NULL, 0) != 0) {
#if defined(TARGET_OS_IPHONE) && TARGET_OS_IPHONE
        // You can't get cpu frequency on iOS devices. Defaults to 0.
        cpuspeed = 0;
#else
        throw std::system_error(errno, std::generic_category());
#endif
    }
    
    natural_t numcpus;
    mach_msg_type_number_t msg_type;
    processor_cpu_load_info_data_t *info;
    kern_return_t info_result = host_processor_info(mach_host_self(), PROCESSOR_CPU_LOAD_INFO, &numcpus,
                                                    (processor_info_array_t*)&info,
                                                    &msg_type);
    if (info_result != KERN_SUCCESS) {
        throw std::system_error(info_result, nodeos::kernel_category());
    }
    
    std::vector<nodeos::Cpu> cpus;
    cpus.reserve(numcpus);
    for (size_t i = 0; i < numcpus; i++) {
        nodeos::Cpu cpu;
        cpu.model = model;
        cpu.speed = cpuspeed/1000000;
        cpu.times.user = (uint64_t)(info[i].cpu_ticks[0]) * multiplier;
        cpu.times.sys = (uint64_t)(info[i].cpu_ticks[1]) * multiplier;
        cpu.times.idle = (uint64_t)(info[i].cpu_ticks[2]) * multiplier;
        cpu.times.nice = (uint64_t)(info[i].cpu_ticks[3]) * multiplier;
        cpu.times.irq = 0.0;
        cpus.push_back(cpu);
    }
    
    vm_deallocate(mach_task_self(), (vm_address_t)info, msg_type);
    return cpus;
}

uint64_t nodeos::GetFreeMemory() {
    vm_statistics_data_t info;
    mach_msg_type_number_t count = sizeof(info) / sizeof(integer_t);
    
    kern_return_t result = host_statistics(mach_host_self(), HOST_VM_INFO, (host_info_t)&info, &count);
    if (result != KERN_SUCCESS) {
        throw std::system_error(result, nodeos::kernel_category());
    }
    
    return (uint64_t) info.free_count * sysconf(_SC_PAGESIZE);
}

uint64_t nodeos::GetTotalMemory() {
    
    uint64_t info;
    int which[] = {CTL_HW, HW_MEMSIZE};
    size_t size = sizeof(info);
    if (sysctl(which, 2, &info, &size, NULL, 0) != 0) {
        throw std::system_error(errno, std::generic_category());
    }
    return info;
}

std::vector<double> nodeos::GetLoadAvg() {
    
    struct loadavg info;
    size_t size = sizeof(info);
    int which[] = {CTL_VM, VM_LOADAVG};
    if (sysctl(which, 2, &info, &size, NULL, 0) < 0) {
        throw std::system_error(errno, std::generic_category());
    }
    
    return {
        ((double) info.ldavg[0] / info.fscale),
        ((double) info.ldavg[1] / info.fscale),
        ((double) info.ldavg[2] / info.fscale)
    };
}
