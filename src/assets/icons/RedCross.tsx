/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import Svg, {
  type SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const RedCross = (props: SvgProps) => (
  <Svg width={64} height={64} viewBox="0 0 64 64" fill="none" {...props}>
    <G
      style={{
        mixBlendMode: 'overlay',
      }}
    >
      <Path
        d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32ZM6.15886 32C6.15886 46.2717 17.7283 57.8411 32 57.8411C46.2717 57.8411 57.8411 46.2717 57.8411 32C57.8411 17.7283 46.2717 6.15886 32 6.15886C17.7283 6.15886 6.15886 17.7283 6.15886 32Z"
        fill="url(#paint0_linear_943_130)"
        fillOpacity={0.3}
      />
    </G>
    <Path
      d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32ZM6.15 32C6.15 46.2766 17.7234 57.85 32 57.85C46.2766 57.85 57.85 46.2766 57.85 32C57.85 17.7234 46.2766 6.15 32 6.15C17.7234 6.15 6.15 17.7234 6.15 32Z"
      fill="#FF6363"
    />
    <Path
      d="M41 37.946L35.0562 32.0011L40.9978 26.0573L37.9438 23L31.9989 28.9438L26.0551 23L23 26.0573L28.9417 32.0011L23 37.9449L26.0573 41L31.9989 35.0562L37.9406 41L41 37.946Z"
      fill="#F9F9F9"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_943_130"
        x1={32}
        y1={64}
        x2={32}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F9F9F9" stopOpacity={0.89} />
        <Stop offset={1} stopColor="#F9F9F9" stopOpacity={0.39} />
        <Stop offset={1} stopColor="#F9F9F9" stopOpacity={0.31} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default RedCross;
