//
//  NodeOsDiagnostics.h
//  react-native-node-os
//
//  Created by Roman Dzieciol on 9/21/19.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@protocol NodeOsDiagnostics

- (void)logError:(NSString*)errorString in:(NSString*)method;

@end

NS_ASSUME_NONNULL_END
