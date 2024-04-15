import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/theme';

const WalletSelectionStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 76,
    padding: 20,
  },
  title: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.secondaryTextColor,
    opacity: 0.7,
  },
  walletTileContainer: {
    backgroundColor: Colors.tileBackground,
    borderRadius: 6,
    padding: 12,
    minHeight: 60,
    marginTop: 8,
  },
  otherWalletTileContainer: {
    backgroundColor: Colors.tileBackground,
    borderRadius: 6,
    padding: 12,
    minHeight: 130,
    marginTop: 8,
  },
  otherWalletContainer: {
    marginTop: 20,
  },
});

export default WalletSelectionStyle;
