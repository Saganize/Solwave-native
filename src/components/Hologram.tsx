import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../utils/theme';

const Hologram = ({
  size,
  title = 'Saganize',
}: {
  size: string;
  title?: string;
}) => {
  return (
    <View style={styles.saganizeContainer}>
      {title === 'Saganize' ? (
        <>
          <Text
            style={[
              styles.middleSubTitle,
              size === 'lg' ? styles.large : styles.small,
            ]}
          >
            Saga
          </Text>
          <Text
            style={[
              styles.rightSubTitle,
              size === 'lg' ? styles.large : styles.small,
            ]}
          >
            nize
          </Text>
        </>
      ) : (
        <Text
          style={[
            styles.rightSubTitle,
            size === 'lg' ? styles.large : styles.small,
          ]}
        >
          {title}
        </Text>
      )}
    </View>
  );
};

export default Hologram;

const styles = StyleSheet.create({
  middleSubTitle: {
    fontWeight: '700',
    color: Colors.secondaryTextColor,
  },
  rightSubTitle: {
    fontWeight: '500',
  },
  saganizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  large: {
    fontSize: 18,
    color: Colors.secondaryTextColor,
  },
  small: {
    fontSize: 12,
    opacity: 0.3,
    color: Colors.secondaryTextColor,
  },
});
