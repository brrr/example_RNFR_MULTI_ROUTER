//
//  RNBridge.h
//  ios
//
//  Created by biran on 2017/12/19.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTBridge.h>
#import <React/RCTEventEmitter.h>

#define kTest @"test"

typedef enum {
    DyDefultFailed = -1000,
    DyConnectionFailed
}DyErrorCode;

@interface RNBridge : RCTEventEmitter<RCTBridgeModule>
+ (RCTBridge *)getSharedRCTBridge;

@end
