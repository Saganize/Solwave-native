#import "Solwave.h"

#import <UIKit/UIKit.h>
#import <React/RCTBridge.h>

@implementation Solwave
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(setString:(NSString *)text)
{
    UIPasteboard *pasteboard = [UIPasteboard generalPasteboard];
    pasteboard.string = text;
}

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeSolwaveSpecJSI>(params);
}
#endif

@end
