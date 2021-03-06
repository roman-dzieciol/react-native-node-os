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

RCT_REMAP_BLOCKING_SYNCHRONOUS_METHOD(getPriority, NSNumber*, getPriority:(NSInteger)pid) {
    [self logWarning:@"getPriority: not implemented"];
    return nil;
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

RCT_REMAP_BLOCKING_SYNCHRONOUS_METHOD(setPriority, id, setPriority:(NSInteger)pid priority:(NSInteger)priority) {
    [self logWarning:@"setPriority: not implemented"];
    return nil;
}

RCT_REMAP_BLOCKING_SYNCHRONOUS_METHOD(uptime, NSNumber*, uptime) {
    return [self.ios uptime];
}

RCT_REMAP_BLOCKING_SYNCHRONOUS_METHOD(userInfo, NSDictionary*, userInfo:(NSDictionary*)options) {
    return [self.ios userInfo:options];
}

- (void)logError:(nonnull NSString *)format, ... NS_FORMAT_FUNCTION(1,2) {
    va_list args;
    va_start(args, format);
    NSString *message = [[NSString alloc] initWithFormat:format arguments:args];
    va_end(args);
    RCTLogError(@"%@", message);
}

- (void)logWarning:(nonnull NSString *)format, ... NS_FORMAT_FUNCTION(1,2) {
    va_list args;
    va_start(args, format);
    NSString *message = [[NSString alloc] initWithFormat:format arguments:args];
    va_end(args);
    RCTLogWarn(@"%@", message);
}

@end
