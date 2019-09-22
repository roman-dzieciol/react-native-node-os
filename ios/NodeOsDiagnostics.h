//
//  NodeOsDiagnostics.h
//  react-native-node-os
//
//  Created by Roman Dzieciol on 9/21/19.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@protocol NodeOsDiagnostics

- (void)logError:(nonnull NSString *)format, ... NS_FORMAT_FUNCTION(1,2);
- (void)logWarning:(nonnull NSString *)format, ... NS_FORMAT_FUNCTION(1,2);

@end

NS_ASSUME_NONNULL_END
