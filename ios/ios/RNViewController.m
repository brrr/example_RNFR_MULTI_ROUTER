//
//  RNViewController.m
//  ios
//
//  Created by biran on 2017/12/19.
//

#import "RNViewController.h"

@interface RNViewController ()

@end

@implementation RNViewController


static NSMutableArray * rvViewControllerStack = nil;

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

+(NSMutableArray *) getRNViewControllerStack{
    if (rvViewControllerStack == nil) {
        rvViewControllerStack = [[NSMutableArray alloc]init];
    }
    return rvViewControllerStack;
}

- (void)viewDidAppear:(BOOL)animated{
    [super viewDidAppear:animated];
    //只有这个controller展示出来才认为是最后一个RnViewController,避免RNBridge init的时候返回当时新创建的实例
    //注意：viewDidLoad 这个回调并不会执行（估计是没有xib或者storyboard实例化的过程），不能在viewDidLoad处理
    //    lastRNViewController = self;
    RNViewController * lastRNViewController = [[self.class getRNViewControllerStack] lastObject ];
    if(lastRNViewController != self){
        [[self.class getRNViewControllerStack] addObject:self];
    }
}

RCT_EXPORT_MODULE(RNViewControllerModule);

RCT_EXPORT_METHOD(dissmisSelfRNViewController) {
    dispatch_async(dispatch_get_main_queue(), ^{
        RNViewController * lastRNViewController = [[self.class getRNViewControllerStack] lastObject];
        [[self.class getRNViewControllerStack]removeLastObject];
        [lastRNViewController dismissViewControllerAnimated:NO completion:^{
            dispatch_async(dispatch_get_main_queue(), ^{
                //                lastRNViewController.view = nil;
                //                lastRNViewController = nil;
            });
        }];
    });
}

@end
