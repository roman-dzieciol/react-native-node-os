//
//  NodeOsDarwin.h
//  react-native-node-os
//
//  Created by Roman Dzieciol on 9/21/19.
//

#pragma once

#include <stdint.h>
#include <string>
#include <vector>
#include <map>

namespace nodeos {
    
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

    extern nodeos::Network::Interfaces GetNetworkInterfaces();
    extern std::vector<Cpu> GetCpus();
    extern std::vector<double> GetLoadAvg();
    extern uint64_t GetFreeMemory();
    extern uint64_t GetTotalMemory();
}