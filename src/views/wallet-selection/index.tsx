import { Text, View } from 'react-native';
import React from 'react';
import { WalletSelectionScreenTitle } from '../../utils/constants';
import WalletTile from '../../components/WalletTile';
import WalletSelectionStyle from './styles';
import { WalletProviderConfig } from '../../utils/walletConfig';
import { useSelectWallet } from '../../hooks';
import { useSelector } from 'react-redux';
import SaganizeLogo from '../../assets/SaganizeLogo';
import PhantomLogo from '../../assets/PhantomLogo';
import SolflareLogo from '../../assets/SolflareLogo';
import type { RootState } from '../../redux/reducer';

const WalletSelection = () => {
  const { selectExternalWallet, selectSaganize } = useSelectWallet();
  const activeWallet = useSelector((state: RootState) => state.activeWallet);
  const userKey = useSelector((state: RootState) => state.userKey);
  return (
    <View style={WalletSelectionStyle.container}>
      <Text style={WalletSelectionStyle.title}>
        {WalletSelectionScreenTitle.recomended}
      </Text>
      <View style={WalletSelectionStyle.walletTileContainer}>
        <WalletTile
          Logo={SaganizeLogo}
          title={WalletProviderConfig.saganize.title}
          isSelected={
            activeWallet?.package === WalletProviderConfig.saganize.package &&
            Boolean(userKey)
          }
          onPress={selectSaganize}
          userKey={
            activeWallet?.package === WalletProviderConfig.saganize.package
              ? userKey
              : null
          }
        />
      </View>
      <View style={WalletSelectionStyle.otherWalletContainer}>
        <Text style={WalletSelectionStyle.title}>
          {WalletSelectionScreenTitle.otherWallets}
        </Text>
        <View style={WalletSelectionStyle.otherWalletTileContainer}>
          <WalletTile
            Logo={PhantomLogo}
            title={WalletProviderConfig.phantom.title}
            isSelected={
              activeWallet?.package === WalletProviderConfig.phantom.package &&
              Boolean(userKey)
            }
            onPress={() => selectExternalWallet(WalletProviderConfig.phantom)}
            userKey={
              activeWallet?.package === WalletProviderConfig.phantom.package
                ? userKey
                : null
            }
          />
          <WalletTile
            Logo={SolflareLogo}
            title={WalletProviderConfig.solflare.title}
            isSelected={
              activeWallet?.package === WalletProviderConfig.solflare.package &&
              Boolean(userKey)
            }
            onPress={() => selectExternalWallet(WalletProviderConfig.solflare)}
            userKey={
              activeWallet?.package === WalletProviderConfig.solflare.package
                ? userKey
                : null
            }
          />
        </View>
      </View>
    </View>
  );
};

export default WalletSelection;
