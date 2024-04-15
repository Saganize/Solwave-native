
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNSolwaveSpec.h"

@interface Solwave : NSObject <NativeSolwaveSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Solwave : NSObject <RCTBridgeModule>
#endif

@end
