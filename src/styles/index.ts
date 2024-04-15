import { StyleSheet } from 'react-native';
import { Colors } from '../utils/theme';

export default StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  container: {
    overflow: 'hidden',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: Colors.background,
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
  },
});

export const WalletTileStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metadataContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
  },
  textContainer: {
    flexDirection: 'column',
    gap: 4,
  },
  address: {
    fontSize: 10,
    fontWeight: '500',
    color: Colors.secondaryTextColor,
    opacity: 0.6,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.secondaryTextColor,
  },
  selectText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.primaryButtonCTA,
  },
  notSelectText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors['white-600'],
  },
});

export const WebviewLoaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
