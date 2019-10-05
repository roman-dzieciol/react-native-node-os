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

#include <sys/utsname.h>
#include <sys/types.h>
#include <system_error>
#include <pwd.h>
#include <bitset>

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
