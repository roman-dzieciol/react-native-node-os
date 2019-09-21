//
//  NodeOsConstants.h
//  react-native-node-os
//
//  Created by Roman Dzieciol on 9/16/19.
//

#import <Foundation/Foundation.h>
#import "NodeOsDiagnostics.h"

@class NodeOsUV;

NS_ASSUME_NONNULL_BEGIN

@interface NodeOsConstants : NSObject

- (NSDictionary *)constants_signals;

- (NSDictionary *)constants_errno;

- (NSDictionary *)constants_dlopen;

- (NSDictionary *)constants_priority;

@end


NS_ASSUME_NONNULL_END
