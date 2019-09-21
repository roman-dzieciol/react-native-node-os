//
//  NodeOsDarwin.m
//  react-native-node-os
//
//  Created by Roman Dzieciol on 9/21/19.
//

#import "NodeOsShared.h"

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

