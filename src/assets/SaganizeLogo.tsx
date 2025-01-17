import * as React from 'react';
import Svg, {
  type SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const SaganizeLogo = (props: SvgProps) => (
  <Svg width={26} height={26} viewBox="0 0 26 26" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26 12.249V5.32178V5.32045C26 2.38223 23.6737 0 20.8044 0H0V1.2104C0 5.21803 2.20034 8.88648 5.69047 10.6994L9.12734 12.4844C9.3001 12.5749 9.50403 12.4459 9.50403 12.2477V8.27596C9.50403 7.982 9.73653 7.74391 10.0236 7.74391H15.5647C16.1765 7.74391 16.7804 7.89289 17.3273 8.1762L25.6233 12.4858C25.7961 12.5762 26 12.4472 26 12.249ZM0 13.751V20.6782V20.6795C0 23.6178 2.32632 26 5.19558 26H26V24.7896C26 20.782 23.7997 17.1135 20.3095 15.3006L16.8727 13.5156C16.6999 13.4251 16.496 13.5541 16.496 13.7523V17.724C16.496 18.018 16.2635 18.2561 15.9764 18.2561H10.4353C9.82356 18.2561 9.21956 18.1071 8.67273 17.8238L0.376683 13.5142C0.20393 13.4238 0 13.5528 0 13.751Z"
      fill="url(#paint0_linear_980_297)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_980_297"
        x1={12.3473}
        y1={19.1698}
        x2={2.14099}
        y2={26.1293}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1C75DD" />
        <Stop offset={1} stopColor="#0156B8" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SaganizeLogo;
