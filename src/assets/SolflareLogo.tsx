import * as React from 'react';
import Svg, {
  type SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
} from 'react-native-svg';
const SolflareLogo = (props: SvgProps) => (
  <Svg width={26} height={26} viewBox="0 0 26 26" fill="none" {...props}>
    <Path
      d="M13.1438 25.018C13.4179 25.018 13.6402 25.2379 13.6402 25.509C13.6402 25.7802 13.4179 26 13.1438 26C12.8696 26 12.6473 25.7802 12.6473 25.509C12.6473 25.2379 12.8696 25.018 13.1438 25.018ZM12.6045 1.56381C12.8471 1.58384 13.043 1.76767 13.0758 2.006L13.6663 6.29613C13.8646 7.71349 15.5741 8.32763 16.6293 7.36446L22.5452 1.97992C22.6879 1.85004 22.9101 1.85904 23.0416 2.00003C23.1622 2.12939 23.1658 2.32743 23.05 2.461L17.8913 8.4117C16.9416 9.50526 17.6423 11.2129 19.09 11.3348L23.6418 11.7736C23.8685 11.7954 24.0343 11.9947 24.0122 12.2187C23.994 12.4034 23.8517 12.5526 23.6661 12.5815L18.8832 13.3284C17.4946 13.5177 16.8657 15.1621 17.7689 16.2305L19.4504 18.2127C19.5858 18.3724 19.5646 18.6104 19.4029 18.7442C19.266 18.8576 19.0677 18.862 18.9258 18.7548L16.853 17.1894C15.7344 16.3482 14.1221 17.0632 14.0039 18.4553L13.5472 23.8848C13.5283 24.1091 13.329 24.2757 13.102 24.2571C12.9093 24.2413 12.7537 24.0954 12.7276 23.9061L12.0032 18.6615C11.8091 17.2441 10.0997 16.63 9.0402 17.5932L2.74687 23.3236C2.6166 23.4422 2.41367 23.434 2.29361 23.3053C2.18346 23.1872 2.18012 23.0064 2.28582 22.8844L7.77824 16.5459C8.72794 15.4524 8.03145 13.7447 6.58369 13.6228L2.03092 13.1839C1.80422 13.1621 1.63838 12.9628 1.6605 12.7388C1.67874 12.5541 1.82102 12.4049 2.00655 12.3759L6.7863 11.6292C8.175 11.4399 8.80809 9.79549 7.90487 8.72715L6.76024 7.37778C6.59226 7.17977 6.61857 6.88468 6.81904 6.71873C6.98891 6.57805 7.23486 6.57267 7.41088 6.70573L8.8165 7.76821C9.93507 8.6094 11.5474 7.89443 11.6656 6.50228L12.0437 2.0324C12.0676 1.75 12.3186 1.54021 12.6045 1.56381ZM0.496424 12.2371C0.770592 12.2371 0.992849 12.4569 0.992849 12.7281C0.992849 12.9992 0.770592 13.2191 0.496424 13.2191C0.222257 13.2191 0 12.9992 0 12.7281C0 12.4569 0.222257 12.2371 0.496424 12.2371ZM25.394 11.7385C25.6682 11.7385 25.8904 11.9584 25.8904 12.2295C25.8904 12.5007 25.6682 12.7205 25.394 12.7205C25.1199 12.7205 24.8976 12.5007 24.8976 12.2295C24.8976 11.9584 25.1199 11.7385 25.394 11.7385ZM12.5328 0C12.807 0 13.0292 0.219825 13.0292 0.490994C13.0292 0.762164 12.807 0.981987 12.5328 0.981987C12.2586 0.981987 12.0364 0.762164 12.0364 0.490994C12.0364 0.219825 12.2586 0 12.5328 0Z"
      fill="url(#paint0_linear_954_161)"
    />
    <Path
      d="M12.8306 17.1168C15.4204 17.1168 17.5199 15.0403 17.5199 12.4788C17.5199 9.91734 15.4204 7.84082 12.8306 7.84082C10.2408 7.84082 8.1413 9.91734 8.1413 12.4788C8.1413 15.0403 10.2408 17.1168 12.8306 17.1168Z"
      fill="url(#paint1_radial_954_161)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_954_161"
        x1={3.38289}
        y1={4.1357}
        x2={18.2298}
        y2={17.5763}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFC10B" />
        <Stop offset={1} stopColor="#FB3F2E" />
      </LinearGradient>
      <RadialGradient
        id="paint1_radial_954_161"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(11.7597 10.7666) rotate(67.5196) scale(6.81763 6.8839)"
      >
        <Stop stopColor="#FFC10B" />
        <Stop offset={1} stopColor="#FB3F2E" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default SolflareLogo;