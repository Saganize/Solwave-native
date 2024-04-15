import * as React from 'react';
import Svg, { type SvgProps, G, Rect } from 'react-native-svg';
const Rhombus = (props: SvgProps) => (
  <Svg width={216} height={333} viewBox="0 0 216 333" fill="none" {...props}>
    <G opacity={0.8}>
      <Rect
        x={220.968}
        y={-109}
        width={312.496}
        height={312.496}
        transform="rotate(45 220.968 -109)"
        fill="white"
        fillOpacity={0.01}
      />
      <Rect
        x={220.968}
        y={-76.9614}
        width={267.358}
        height={267.358}
        transform="rotate(45 220.968 -76.9614)"
        fill="white"
        fillOpacity={0.02}
      />
      <Rect
        x={220.968}
        y={-41.6079}
        width={216.537}
        height={216.537}
        transform="rotate(45 220.968 -41.6079)"
        fill="white"
        fillOpacity={0.02}
      />
    </G>
  </Svg>
);
export default Rhombus;
