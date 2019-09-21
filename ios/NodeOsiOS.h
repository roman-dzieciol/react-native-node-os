//
//  NodeOsiOS.h
//  react-native-node-os
//
//  Created by Roman Dzieciol on 9/21/19.
//

#import <Foundation/Foundation.h>
#import "NodeOsDiagnostics.h"

NS_ASSUME_NONNULL_BEGIN

@interface NodeOsiOS : NSObject

- (instancetype)initWithDiagnostics:(NSObject<NodeOsDiagnostics>*)diagnostics;

- (NSDictionary *)constantsToExport;

- (NSString *)arch;
- (NSArray<NSDictionary*>*)cpus;
- (NSString *)endianness;
- (NSString *)eol;
- (NSNumber*)freemem;
- (NSString *)homedir;
- (NSString*)hostname;
- (NSArray*)loadavg;
- (NSDictionary*)networkInterfaces;
- (NSString *)osPlatform;
- (NSString *)osRelease;
- (NSString *)osType;
- (NSString *)tmpdir;
- (NSNumber*)totalmem;
- (NSNumber*)uptime;

@end

NS_ASSUME_NONNULL_END
