//
//  RNBridge.m
//  ios
//
//  Created by biran on 2017/12/19.
//

#import "RNBridge.h"

static RCTBridge * sharedRCTBridge = nil;

@implementation RNBridge

+ (RCTBridge *)getSharedRCTBridge{
    if (sharedRCTBridge == NULL) {
        NSURL * jsCodeLocation = [NSURL new];
        jsCodeLocation = [NSURL URLWithString:@"http://127.0.0.1:8081/index.ios.bundle?platform=ios"];
        sharedRCTBridge = [[RCTBridge alloc]initWithBundleURL:jsCodeLocation moduleProvider:nil launchOptions:nil];
    }
    return sharedRCTBridge;
}

RCT_EXPORT_MODULE(RNBridge);

- (NSArray<NSString *> *)supportedEvents {
    return @[kTest];
}

- (NSDictionary<NSString *, NSString *> *)constantsToExport {
    return @{ @"test": kTest};
}

@end
