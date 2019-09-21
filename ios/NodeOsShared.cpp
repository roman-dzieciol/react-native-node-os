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
#include <pwd.h>

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

nodeos::UserInfo nodeos::GetUserInfo() {
    
    UserInfo userInfo;
    
    size_t bufsize = sysconf(_SC_GETPW_R_SIZE_MAX);
    if (bufsize == -1) {
        bufsize = 16384;
    }
    
    uid_t uid = getuid();
    int r = ERANGE;
    while (r == ERANGE) {
        std::vector<char> buf(bufsize, 0);
        struct passwd pwd;
        struct passwd *result;
        r = getpwuid_r(uid, &pwd, &buf[0], buf.size(), &result);
        if (r == ERANGE) {
            if (bufsize > 1024 * 1024 * 10) {
                throw std::system_error(ERANGE, std::generic_category());
            }
            bufsize *= 2;
            continue;
        } else if (r != 0) {
            throw std::system_error(errno, std::generic_category());
        } else {
            if (result) {
                userInfo.username = pwd.pw_name;
                userInfo.uid = std::to_string(pwd.pw_uid);
                userInfo.gid = std::to_string(pwd.pw_gid);
                userInfo.homedir = pwd.pw_dir;
                userInfo.shell = pwd.pw_shell;
            }
        }
    }
  
    return userInfo;
}
