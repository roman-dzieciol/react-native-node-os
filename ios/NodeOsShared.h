//
//  NodeOsUV.h
//  react-native-node-os
//
//  Created by Roman Dzieciol on 9/16/19.
//

#pragma once

#include <stdint.h>
#include <string>
#include <vector>
#include <map>


namespace nodeos {
 
    struct Network {
        
        struct Address {
            std::string address;
            std::string netmask;
            std::string family;
            std::string cidr;
            std::string mac;
            bool internal;
        };
        
        struct Interface {
            std::string name;
            std::vector<Address> addresses;
        };
        
        using Interfaces = std::map<std::string,Interface>;
    };
    
    struct Cpu {
        
        struct Times {
            double user;
            double sys;
            double idle;
            double nice;
            double irq;
        };
        
        std::string model;
        double speed;
        Times times;
    };
    
    struct UserInfo {
        std::string username;
        std::string uid;
        std::string gid;
        std::string shell;
        std::string homedir;
    };
    
    extern std::vector<Cpu> GetCpus();
    extern nodeos::Network::Interfaces GetNetworkInterfaces();
    extern uint64_t GetFreeMemory();
    extern std::vector<double> GetLoadAvg();
    extern std::string GetRelease();
    extern std::string GetSysName();
    extern uint64_t GetTotalMemory();
    extern UserInfo GetUserInfo();

}
