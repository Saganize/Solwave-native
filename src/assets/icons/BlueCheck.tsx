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
const BlueCheck = (props: SvgProps) => (
  <Svg width={64} height={64} viewBox="0 0 64 64" fill="none" {...props}>
    <G
      style={{
        mixBlendMode: 'overlay',
      }}
    >
      <Path
        d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32ZM6.15886 32C6.15886 46.2717 17.7283 57.8411 32 57.8411C46.2717 57.8411 57.8411 46.2717 57.8411 32C57.8411 17.7283 46.2717 6.15886 32 6.15886C17.7283 6.15886 6.15886 17.7283 6.15886 32Z"
        fill="url(#paint0_linear_662_2358)"
        fillOpacity={0.3}
      />
    </G>
    <Path
      d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32ZM6.15 32C6.15 46.2766 17.7234 57.85 32 57.85C46.2766 57.85 57.85 46.2766 57.85 32C57.85 17.7234 46.2766 6.15 32 6.15C17.7234 6.15 6.15 17.7234 6.15 32Z"
      fill="#2380EA"
    />
    <Path
      d="M28.2209 42L21 34.4073L24.2907 30.9472L28.2209 35.092L39.7093 23L43 26.4601L28.2209 42Z"
      fill="#F9F9F9"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_662_2358"
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
export default BlueCheck;
