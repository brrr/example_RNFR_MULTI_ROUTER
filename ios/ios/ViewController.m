//
//  ViewController.m
//  ios
//
//  Created by biran on 2017/12/19.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)presentRNViewController:(NSString *)moduleName params:(NSDictionary *)params{
    
    RCTRootView * RNrootView = [[RCTRootView alloc]initWithBridge:[RNBridge getSharedRCTBridge] moduleName:moduleName
                                                initialProperties:params];
    RNViewController *rnViewController = [[RNViewController alloc] init];
    rnViewController.view = RNrootView;
    [self presentViewController:rnViewController animated:NO completion:^{
        
    }];
    
}

- (IBAction)action0:(id)sender {
    [self presentRNViewController:@"RouterA" params:@{@"foo":@"bar"}];
}

- (IBAction)action1:(id)sender {
    [self presentRNViewController:@"RouterB" params:@{@"foo":@"bar"}];
}


@end
