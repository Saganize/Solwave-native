import * as React from 'react';
import Svg, {
  type SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const PhantomLogo = (props: SvgProps) => (
  <Svg width={26} height={26} viewBox="0 0 26 26" fill="none" {...props}>
    <Path
      d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
      fill="url(#paint0_linear_954_154)"
    />
    <Path
      d="M22.4914 13.2613H20.1796C20.1796 8.47126 16.347 4.58838 11.6191 4.58838C6.94963 4.58838 3.15331 8.3762 3.06041 13.0842C2.96428 17.9507 7.47086 22.1766 12.275 22.1766H12.8792C17.1147 22.1766 22.7914 18.8176 23.6784 14.7249C23.8422 13.9704 23.2539 13.2613 22.4914 13.2613ZM8.18365 13.4747C8.18365 14.1152 7.66654 14.6391 7.03428 14.6391C6.40203 14.6391 5.88494 14.115 5.88494 13.4747V11.5909C5.88494 10.9503 6.40203 10.4264 7.03428 10.4264C7.66654 10.4264 8.18365 10.9503 8.18365 11.5909V13.4747ZM12.1747 13.4747C12.1747 14.1152 11.6576 14.6391 11.0254 14.6391C10.3931 14.6391 9.87601 14.115 9.87601 13.4747V11.5909C9.87601 10.9503 10.3933 10.4264 11.0254 10.4264C11.6576 10.4264 12.1747 10.9503 12.1747 11.5909V13.4747Z"
      fill="url(#paint1_linear_954_154)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_954_154"
        x1={13}
        y1={0}
        x2={13}
        y2={26}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#534BB1" />
        <Stop offset={1} stopColor="#551BF9" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_954_154"
        x1={13.3824}
        y1={4.58838}
        x2={13.3824}
        y2={22.1766}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset={1} stopColor="white" stopOpacity={0.82} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default PhantomLogo;
