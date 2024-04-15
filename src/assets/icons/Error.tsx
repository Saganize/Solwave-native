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
const Error = (props: SvgProps) => (
  <Svg width={64} height={64} viewBox="0 0 64 64" fill="none" {...props}>
    <G id="Group 2565">
      <G id="Group 2473">
        <G id="Group 2562">
          <G id="Group 2473_2">
            <G
              id="Ellipse 29"
              style={{
                mixBlendMode: 'overlay',
              }}
            >
              <Path
                d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32ZM6.15886 32C6.15886 46.2717 17.7283 57.8411 32 57.8411C46.2717 57.8411 57.8411 46.2717 57.8411 32C57.8411 17.7283 46.2717 6.15886 32 6.15886C17.7283 6.15886 6.15886 17.7283 6.15886 32Z"
                fill="url(#paint0_linear_943_184)"
                fillOpacity={0.3}
              />
            </G>
            <Path
              id="Ellipse 30"
              d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32ZM6.15 32C6.15 46.2766 17.7234 57.85 32 57.85C46.2766 57.85 57.85 46.2766 57.85 32C57.85 17.7234 46.2766 6.15 32 6.15C17.7234 6.15 6.15 17.7234 6.15 32Z"
              fill="#FFC163"
            />
          </G>
          <G id="Vector">
            <Path
              d="M33.0834 40.4816C32.7378 40.8272 32.31 41 31.8 41C31.2912 41.0012 30.864 40.829 30.5184 40.4834C30.1728 40.1378 30 39.71 30 39.2C29.9988 38.6912 30.171 38.264 30.5166 37.9184C30.8622 37.5728 31.29 37.4 31.8 37.4C32.3088 37.3988 32.736 37.571 33.0816 37.9166C33.4272 38.2622 33.6 38.69 33.6 39.2C33.6012 39.7088 33.429 40.136 33.0834 40.4816Z"
              fill="#F9F9F9"
            />
            <Path d="M33.6 33.8H30V23H33.6V33.8Z" fill="#F9F9F9" />
          </G>
        </G>
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_943_184"
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
export default Error;
