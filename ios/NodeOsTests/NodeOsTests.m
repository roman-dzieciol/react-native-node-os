//
//  NodeOsTests.m
//  NodeOsTests
//
//  Created by Roman Dzieciol on 9/20/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <XCTest/XCTest.h>
#import "NodeOsiOS.h"

@interface NodeOsTests : XCTestCase<NodeOsDiagnostics>

@end

@implementation NodeOsTests

- (void)logError:(NSString*)errorString in:(NSString*)method {
    XCTFail(@"%@: %@", method, errorString);
}

- (void)testNetworkInterfaces {
    NodeOsiOS* ios = [[NodeOsiOS alloc] initWithDiagnostics:self];
    NSDictionary* result = [ios networkInterfaces];
    NSLog(@"%@", result);
    XCTAssertNotEqual([[result allKeys] count], 0);
    for (NSArray* infoArray in [result allValues]) {
        XCTAssertNotEqual([infoArray count], 0);
        for (NSDictionary* info in infoArray) {
            XCTAssertNotEqual([info[@"address"] length], 0);
            XCTAssertNotEqual([info[@"family"] length], 0);
            XCTAssertNotEqual([info[@"netmask"] length], 0);
            XCTAssertTrue([info[@"internal"] isKindOfClass:[NSNumber class]]);
        }
    }
}


- (void)testCpus {
    NodeOsiOS* ios = [[NodeOsiOS alloc] initWithDiagnostics:self];
    NSArray* result = [ios cpus];
    XCTAssertNotEqual([result count], 0);
    for (NSDictionary* info in result) {
        XCTAssertNotEqual([info[@"model"] length], 0);
        XCTAssertNotEqual(info[@"speed"], @(0));
        NSDictionary* times = info[@"times"];
        XCTAssertTrue([times[@"idle"] isKindOfClass:[NSNumber class]]);
        XCTAssertTrue([times[@"irq"] isKindOfClass:[NSNumber class]]);
        XCTAssertTrue([times[@"nice"] isKindOfClass:[NSNumber class]]);
        XCTAssertTrue([times[@"sys"] isKindOfClass:[NSNumber class]]);
        XCTAssertTrue([times[@"user"] isKindOfClass:[NSNumber class]]);
    }
    
}

- (void)testUserInfo {
    NodeOsiOS* ios = [[NodeOsiOS alloc] initWithDiagnostics:self];
    NSDictionary* result = [ios userInfo:@{}];
    XCTAssertTrue([result[@"username"] isKindOfClass:[NSString class]]);
    XCTAssertTrue([result[@"uid"] isKindOfClass:[NSString class]]);
    XCTAssertTrue([result[@"gid"] isKindOfClass:[NSString class]]);
    XCTAssertTrue([result[@"homedir"] isKindOfClass:[NSString class]]);
    XCTAssertTrue([result[@"shell"] isKindOfClass:[NSString class]]);
}

@end
