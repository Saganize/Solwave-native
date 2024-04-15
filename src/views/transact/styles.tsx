import { StyleSheet } from 'react-native';
import { Colors, headerMargin } from '../../utils/theme';

export const txnStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  metadataContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 12,
    marginTop: 12,
  },
  simulationContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderColor: Colors.borderColor,
    gap: 8,
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    paddingBottom: 20,
    backgroundColor: Colors.tileBackground,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.secondaryTextColor,
    opacity: 0.8,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.yellow,
  },
  feeCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Colors.borderColor,
    gap: 8,
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    backgroundColor: Colors.tileBackground,
  },
  feeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  constant: {
    fontWeight: '400',
    fontSize: 14,
    color: Colors.secondaryTextColor,
    opacity: 0.4,
  },
  fee: {
    fontSize: 14,
    color: Colors.secondaryTextColor,
    fontWeight: '600',
  },
  sol: {
    fontSize: 14,
    color: Colors.secondaryTextColor,
    fontWeight: '300',
  },
  topContainer: {
    flexDirection: 'column',
    gap: 12,
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
    marginBottom: 8,
  },
  publicAddress: {
    fontWeight: '500',
    fontSize: 10,
    opacity: 0.6,
    color: Colors.secondaryTextColor,
    marginTop: 4,
  },
});

export const processedStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    color: Colors.secondaryTextColor,
    marginTop: 30,
  },
  body: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.secondaryTextColor,
    opacity: 0.8,
    marginTop: 8,
  },
  footer: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.secondaryTextColor,
    opacity: 0.4,
    marginBottom: 20,
  },
});

export const processingStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    color: Colors.secondaryTextColor,
    marginTop: 30,
  },
  body: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.secondaryTextColor,
    opacity: 0.8,
    marginTop: 8,
  },
  footer: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.secondaryTextColor,
    opacity: 0.4,
    marginBottom: 20,
  },
});

export const failedStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 4,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconContainer: {
    height: 64,
    width: 64,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: Colors.primaryButtonCTA,
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    color: Colors.secondaryTextColor,
    marginTop: 30,
  },
  body: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.secondaryTextColor,
    opacity: 0.8,
    marginTop: 8,
  },
});

export const completeStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconContainer: {
    height: 64,
    width: 64,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: Colors.primaryButtonCTA,
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    color: Colors.secondaryTextColor,
    marginTop: 30,
  },
  body: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.secondaryTextColor,
    opacity: 0.8,
    marginTop: 8,
  },
  footer: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    marginBottom: 30,
  },
  btn: {
    backgroundColor: Colors.tileBackground,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 30,
    backgroundColor: Colors.tileBackground,
  },
});

export const addFundsStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: headerMargin,
    marginBottom: 20,
  },
  topContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  initalDollarContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.initialCircle,
  },
  middleDollarContainer: {
    height: 64,
    width: 64,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: Colors.lightRed,
  },
  dollarContainer: {
    height: 60,
    width: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Colors.red,
  },
  title: {
    fontWeight: '600',
    fontSize: 28,
    color: Colors.secondaryTextColor,
    marginTop: 30,
  },
  subTitle: {
    opacity: 0.4,
    fontWeight: '300',
    fontSize: 13,
    color: Colors['white-600'],
    marginTop: 10,
  },
  copyTile: {
    backgroundColor: Colors.tileBackground,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 40,
    paddingVertical: 12,
    marginTop: 20,
  },
  address: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.secondaryTextColor,
  },
  bottomContainer: {
    flexDirection: 'column',
    gap: 8,
  },
  btnHeader: {
    fontWeight: '400',
    fontSize: 12,
    color: Colors.secondaryTextColor,
    opacity: 0.8,
    textAlign: 'center',
  },
});
