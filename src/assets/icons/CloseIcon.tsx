import * as React from 'react';
import Svg, { type SvgProps, G, Rect, Line } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const SVGComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="#000000" {...props}>
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <G
        id="Page-1"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <G id="Close">
          <Rect
            id="Rectangle"
            fillRule="nonzero"
            x={0}
            y={0}
            width={24}
            height={24}
          />
          <Line
            x1={16.9999}
            y1={7}
            x2={7.00001}
            y2={16.9999}
            id="Path"
            stroke="#ffffff"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <Line
            x1={7.00006}
            y1={7}
            x2={17}
            y2={16.9999}
            id="Path"
            stroke="#ffffff"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default SVGComponent;
