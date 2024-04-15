import { StyleSheet } from 'react-native';
import { Colors, headerMargin } from '../../utils/theme';

const signStyles = StyleSheet.create({
  container: {
    marginTop: headerMargin,
    paddingHorizontal: 12,
    paddingVertical: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  messageCardContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderColor: Colors.borderColor,
    gap: 10,
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    backgroundColor: Colors.tileBackground,
  },
  constant: {
    fontWeight: '400',
    fontSize: 16,
    color: Colors['white-600'],
  },
  message: {
    fontSize: 16,
    color: Colors.secondaryTextColor,
    fontWeight: '400',
    opacity: 0.6,
  },
  appTileContainer: {
    padding: 12,
    borderRadius: 6,
    backgroundColor: Colors.tileBackground,
  },
  appTileTitle: {
    fontSize: 12,
    fontWeight: '400',
    opacity: 0.4,
    color: Colors.secondaryTextColor,
    marginBottom: 4,
  },
  publicAddress: {
    fontWeight: '500',
    fontSize: 10,
    opacity: 0.6,
    color: Colors.secondaryTextColor,
    marginTop: 4,
  },
});

export default signStyles;
