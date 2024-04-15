import type { TurboModule } from 'react-native';
import { NativeModules, Platform, TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  setString(content: string): void;
}

const LINKING_ERROR =
  `The package 'solwave' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const SolwaveModule = isTurboModuleEnabled
  ? require('./NativeSolwave').default
  : NativeModules.Solwave;

export const SolwaveNative = SolwaveModule
  ? SolwaveModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export default TurboModuleRegistry.getEnforcing<Spec>('Solwave');
