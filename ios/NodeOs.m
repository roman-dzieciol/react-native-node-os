#import "NodeOs.h"

#import "NodeOsDiagnostics.h"
#import "NodeOsiOS.h"
#import <React/RCTLog.h>


@interface NodeOs()<NodeOsDiagnostics>

@property (nonatomic, strong) NodeOsiOS* ios;

@end

@implementation NodeOs

RCT_EXPORT_MODULE(NodeOs)

- (instancetype)init
{
    self = [super init];
    if (self) {
        self.ios = [[NodeOsiOS alloc] initWithDiagnostics:self];
    }
    return self;
}


+ (BOOL)requiresMainQueueSetup {
    return YES;
}

- (NSDictionary *)constantsToExport {
    return [self.ios constantsToExport];
}

RCT_REMAP_BLOCKING_SYNCHRONOUS_METHOD(cpus, NSArray<NSDictionary*>*, cpus) {
    return [self.ios cpus];
}

RCT_REMAP_BLOCKING_SYNCHRONOUS_METHOD(freemem, NSNumber*, freemem) {
    return [self.ios freemem];
}

RCT_REMAP_BLOCKING_SYNCHRONOUS_METHOD(hostname, NSString*, hostname) {
    return [self.ios hostname];
}

RCT_REMAP_BLOCKING_SYNCHRONOUS_METHOD(loadavg, NSArray*, loadavg) {
    return [self.ios loadavg];
}

RCT_REMAP_BLOCKING_SYNCHRONOUS_METHOD(networkInterfaces, NSDictionary*, networkInterfaces) {
    return [self.ios networkInterfaces];
}

RCT_REMAP_BLOCKING_SYNCHRONOUS_METHOD(uptime, NSNumber*, uptime) {
    return [self.ios uptime];
}

RCT_REMAP_BLOCKING_SYNCHRONOUS_METHOD(userInfo, NSDictionary*, userInfo:(NSDictionary*)options) {
    return [self.ios userInfo:options];
}

- (void)logError:(nonnull NSString *)errorString in:(nonnull NSString *)method {
    RCTLogError(@"Could not get %@: %@", method, errorString);
}

@end
