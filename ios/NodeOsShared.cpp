//
//  NodeOsUV.cpp
//  react-native-node-os
//
//  Created by Roman Dzieciol on 9/16/19.
//

#include "NodeOsShared.h"

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
    
    std::string GetSockAddrName(struct sockaddr *addr);
}

std::string nodeos::GetRelease() {
    struct utsname info;
    if (uname(&info) != 0) {
        throw std::system_error(errno, std::generic_category());
    }
    return info.release;
}

std::string nodeos::GetSysName() {
    struct utsname info;
    if (uname(&info) != 0) {
        throw std::system_error(errno, std::generic_category());
    }
    return info.sysname;
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

uint64_t nodeos::GetTotalMemory() {
    
    uint64_t info;
    int which[] = {CTL_HW, HW_MEMSIZE};
    size_t size = sizeof(info);
    if (sysctl(which, 2, &info, &size, NULL, 0) != 0) {
        throw std::system_error(errno, std::generic_category());
    }
    return info;
}
