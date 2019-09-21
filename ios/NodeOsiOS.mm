//
//  NodeOsiOS.m
//  react-native-node-os
//
//  Created by Roman Dzieciol on 9/21/19.
//

#import "NodeOsiOS.h"
#import "NodeOsShared.h"
#import "NodeOsDiagnostics.h"
#import "NodeOsConstants.h"

@interface NodeOsiOS()

@property (weak, nonatomic) NSObject<NodeOsDiagnostics>* diagnostics;
@property (nonatomic, strong) NodeOsConstants* constants;

@end

@implementation NodeOsiOS

- (instancetype)initWithDiagnostics:(NSObject<NodeOsDiagnostics>*)diagnostics
{
    self = [super init];
    if (self) {
        self.diagnostics = diagnostics;
        self.constants = [NodeOsConstants new];
    }
    return self;
}

- (NSDictionary *)constantsToExport {
    return @{
             @"_cached": @{
                     @"arch": [self arch],
                     @"endianness": [self endianness],
                     @"homedir": [self homedir],
                     @"platform": [self osPlatform],
                     @"release": [self osRelease],
                     @"type": [self osType],
                     @"tmpdir": [self tmpdir],
                     @"totalmem": [self totalmem],
                     },
             @"EOL": @"\n",
             @"constants": @{
                     @"signals": [self.constants constants_signals],
                     @"errno": [self.constants constants_errno],
                     @"dlopen": [self.constants constants_dlopen],
                     @"priority": [self.constants constants_priority],
                     },
             };
}

- (NSString *)arch {
#if TARGET_CPU_X86
    return @"x32";
#elif TARGET_CPU_X86_64
    return @"x64";
#elif TARGET_CPU_ARM
    return @"arm";
#elif TARGET_CPU_ARM64
    return @"arm64";
#else
    return [NSNull null];
#endif
}

- (NSArray<NSDictionary*>*)cpus {
    auto cpus = nodeos::GetCpus();
    NSMutableArray* result = [NSMutableArray new];
    for(auto &cpu: cpus) {
        [result addObject:@{
                            @"model": [NSString stringWithCString:cpu.model.c_str() encoding:NSUTF8StringEncoding],
                            @"speed": @(cpu.speed),
                            @"times": @{
                                    @"user": @(cpu.times.user),
                                    @"sys": @(cpu.times.sys),
                                    @"idle": @(cpu.times.idle),
                                    @"nice": @(cpu.times.nice),
                                    @"irq": @(cpu.times.irq),
                                    }
                            }];
    }
    return result;
}

- (NSString *)endianness {
#if TARGET_RT_LITTLE_ENDIAN
    return @"LE";
#elif TARGET_RT_BIG_ENDIAN
    return @"BE";
#else
    return [NSNull null];
#endif
}

- (NSString *)eol {
    return @"\n";
}

- (NSNumber*)freemem {
    try {
        return @(nodeos::GetFreeMemory());
    } catch (std::exception& e) {
        [self.diagnostics logError:[NSString stringWithUTF8String:e.what()] in:@"freemem"];
        return nil;
    }
}

- (NSString *)homedir {
    return NSHomeDirectory();
}

- (NSString*)hostname {
    return [[NSProcessInfo processInfo] hostName];
}

- (NSArray*)loadavg {
    try {
        std::vector<double> loadAvg = nodeos::GetLoadAvg();
        return @[@(loadAvg[0]),
                 @(loadAvg[1]),
                 @(loadAvg[2])];
    } catch (std::exception& e) {
        [self.diagnostics logError:[NSString stringWithUTF8String:e.what()] in:@"loadavg"];
        return nil;
    }
}

- (NSDictionary*)networkInterfaces {
    try {
        auto interfaces = nodeos::GetNetworkInterfaces();
        
        NSMutableDictionary* result = [NSMutableDictionary new];
        for(auto it=interfaces.begin(); it!=interfaces.end(); ++it) {
            
            NSMutableArray* addressList = [NSMutableArray new];
            auto addresses = it->second.addresses;
            for(auto ait=addresses.begin(); ait!=addresses.end(); ++ait) {
                NSMutableDictionary* addressInfo = [NSMutableDictionary new];
                if (!ait->address.empty()) {
                    addressInfo[@"address"] = [NSString stringWithCString:ait->address.c_str() encoding:NSUTF8StringEncoding];
                }
                if (!ait->netmask.empty()) {
                    addressInfo[@"netmask"] = [NSString stringWithCString:ait->netmask.c_str() encoding:NSUTF8StringEncoding];
                }
                if (!ait->mac.empty()) {
                    addressInfo[@"mac"] = [NSString stringWithCString:ait->mac.c_str() encoding:NSUTF8StringEncoding];
                }
                if (!ait->cidr.empty()) {
                    addressInfo[@"cidr"] = [NSString stringWithCString:ait->cidr.c_str() encoding:NSUTF8StringEncoding];
                }
                if (!ait->family.empty()) {
                    addressInfo[@"family"] = [NSString stringWithCString:ait->family.c_str() encoding:NSUTF8StringEncoding];
                }
                addressInfo[@"internal"] = @(ait->internal);
                [addressList addObject:addressInfo];
            }
            NSString* name = [NSString stringWithCString:it->second.name.c_str() encoding:NSUTF8StringEncoding];
            result[name] = addressList;
        }
        return result;
        
    } catch (std::exception& e) {
        [self.diagnostics logError:[NSString stringWithUTF8String:e.what()] in:@"loadavg"];
        return nil;
    }
}

- (NSString *)osPlatform {
    return @"darwin";
}

- (NSString *)osRelease {
    try {
        return [NSString stringWithCString:nodeos::GetRelease().c_str() encoding:NSUTF8StringEncoding];
    } catch (std::exception& e) {
        [self.diagnostics logError:[NSString stringWithUTF8String:e.what()] in:@"release"];
        return nil;
    }
}

- (NSString *)osType {
    try {
        return [NSString stringWithCString:nodeos::GetSysName().c_str() encoding:NSUTF8StringEncoding];
    } catch (std::exception& e) {
        [self.diagnostics logError:[NSString stringWithUTF8String:e.what()] in:@"sysname"];
        return nil;
    }
}

- (NSString *)tmpdir {
    return NSTemporaryDirectory();
}

- (NSNumber*)totalmem {
    try {
        return @(nodeos::GetTotalMemory());
    } catch (std::exception& e) {
        [self.diagnostics logError:[NSString stringWithUTF8String:e.what()] in:@"totalmem"];
        return nil;
    }
}

- (NSNumber*)uptime {
    return @([[NSProcessInfo processInfo] systemUptime]);;
}

@end
