import type { SvgProps } from 'react-native-svg';

export interface IWalletTitle {
  Logo: (props: SvgProps) => JSX.Element;
  title: string;
  isSelected: boolean;
  onPress: () => void;
  userKey?: string | null;
}
