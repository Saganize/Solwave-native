import { StyleSheet } from 'react-native';
import { Colors } from '../utils/theme';

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    padding: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors['white-600'],
  },
  leftSubTitle: {
    fontSize: 12,
    fontWeight: '300',
    color: Colors['white-600'],
    opacity: 0.3,
  },
  closeIcon: {
    backgroundColor: Colors['close-bg'],
    height: 34,
    width: 34,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  poweredByContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
});

export default headerStyles;
