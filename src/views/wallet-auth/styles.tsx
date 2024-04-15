import { StyleSheet } from 'react-native';
import { Colors, headerMargin } from '../../utils/theme';

const walletAuthStyles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  leftRhombus: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    transform: [{ scaleX: -1 }, { rotateX: '180deg' }],
  },
  rightRhombus: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

const onboardingAuthStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: headerMargin,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bottomContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 40,
    flex: 0.6,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  title: {
    fontSize: 30,
    color: Colors.secondaryTextColor,
    fontWeight: '600',
    textAlign: 'center',
  },
  subTitle: {
    fontWeight: '300',
    fontSize: 14,
    color: Colors['white-600'],
    opacity: 0.4,
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  btn: {
    height: 50,
    width: 320,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: Colors.primaryButtonCTA,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '700',
    alignItems: 'center',
    color: Colors.secondaryTextColor,
  },
  footerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  leftFooterText: {
    fontWeight: '300',
    fontSize: 12,
    color: Colors.secondaryTextColor,
    opacity: 0.5,
  },
  rightFooterText: {
    fontWeight: '600',
    fontSize: 12,
    color: Colors.secondaryTextColor,
    opacity: 0.9,
  },
});

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: headerMargin + 40,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 80,
  },
  textContainer: {
    flexDirection: 'column',
    gap: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.secondaryTextColor,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '300',
    opacity: 0.66,
    color: Colors.secondaryTextColor,
  },
  btnContainer: {
    flexDirection: 'column',
    gap: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    opacity: 0.8,
    color: Colors.secondaryTextColor,
  },
  btn: {
    backgroundColor: Colors['white-600'],
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    padding: 16,
  },
  btnText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors['black-500'],
    marginLeft: 60,
  },
});

export { onboardingAuthStyles, walletAuthStyles, loginStyles };
