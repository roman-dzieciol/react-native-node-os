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
    
    struct UserInfo {
        std::string username;
        std::string uid;
        std::string gid;
        std::string shell;
        std::string homedir;
    };
    
    extern std::string GetRelease();
    extern std::string GetSysName();
    extern UserInfo GetUserInfo();

}
