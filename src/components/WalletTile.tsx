import { Text, View } from 'react-native';
import React from 'react';
import { WalletTileStyles } from '../styles';
import type { IWalletTitle } from '../types/IWalletTile';
import { TouchableOpacity } from 'react-native';

const WalletTile = ({
  Logo,
  isSelected,
  title,
  onPress,
  userKey,
}: IWalletTitle) => {
  return (
    <View style={WalletTileStyles.container}>
      <View style={WalletTileStyles.metadataContainer}>
        <Logo height={26} width={26} />
        <View style={WalletTileStyles.textContainer}>
          <Text style={WalletTileStyles.title}>{title}</Text>
          {userKey ? (
            <Text style={WalletTileStyles.address}>{`${userKey.substring(
              0,
              6
            )}......${userKey.substring(
              userKey.length - 6,
              userKey.length
            )}`}</Text>
          ) : (
            <></>
          )}
        </View>
      </View>
      {isSelected ? (
        <Text style={WalletTileStyles.selectText}>SELECTED</Text>
      ) : (
        <TouchableOpacity onPress={onPress}>
          <Text style={WalletTileStyles.notSelectText}>SELECT</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default WalletTile;
