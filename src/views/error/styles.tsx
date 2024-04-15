import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/theme';

const errorStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 30,
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
    textAlign: 'center',
  },
});

export default errorStyles;
