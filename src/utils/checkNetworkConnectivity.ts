import NetInfo from '@react-native-community/netinfo';

const checkNetworkConnectivity = async (): Promise<boolean> => {
  const status = await NetInfo.fetch();
  if (!status.isConnected) {
    return false;
  }
  return true;
};

export default checkNetworkConnectivity;
