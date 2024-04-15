import {
  StyleSheet,
  Text,
  TouchableOpacity,
  type GestureResponderEvent,
  type StyleProp,
  type ViewStyle,
  ActivityIndicator,
} from 'react-native';
import React, { type ReactNode } from 'react';
import { Colors } from '../utils/theme';

const Button = ({
  Icon,
  title,
  bgColor = Colors.primaryButtonCTA,
  color = Colors.secondaryTextColor,
  onPress,
  style,
  loading,
}: {
  Icon?: ReactNode | null;
  title: string;
  bgColor?: string;
  color?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        { backgroundColor: bgColor },
        // eslint-disable-next-line react-native/no-inline-styles
        !Icon ? { justifyContent: 'center' } : null,
        style,
      ]}
      onPress={onPress}
    >
      {Icon ? Icon : <></>}
      {loading ? (
        <ActivityIndicator size={'small'} color={Colors.secondaryTextColor} />
      ) : (
        <Text
          style={[
            styles.btnText,
            { color: color },
            // eslint-disable-next-line react-native/no-inline-styles
            Icon ? { marginLeft: 60 } : null,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'column',
    gap: 16,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors['black-500'],
  },
});
