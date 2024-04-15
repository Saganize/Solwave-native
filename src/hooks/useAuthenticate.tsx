import { GoogleSignin } from '@react-native-google-signin/google-signin';
import LoginUser from '../utils/api/LoginUser';
import { useDispatch } from 'react-redux';
import {
  initiateUserData,
  openErrorview,
  openWebview,
  toggleSheetState,
} from '../redux/actions';
import CreateUser from '../utils/api/CreateUser';
import { useWindowDimensions } from 'react-native';
import { sheetState } from '../types/sheetController';
import React from 'react';
import SolwaveContext from '../context';
import { getStatusMessage } from '../utils/api/getStatusMessage';

export const useAuthenticate = () => {
  const dispatch = useDispatch();
  const { apiKey } = React.useContext(SolwaveContext);
  const { height } = useWindowDimensions();

  const loginUser = async () => {
    try {
      dispatch(toggleSheetState({ sheetState: sheetState.Loading }));
      await signOut();
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      const { user, idToken } = await GoogleSignin.signIn();

      const data = await LoginUser(user.email, idToken!, apiKey);
      dispatch(initiateUserData(data));
      dispatch(
        openWebview({
          height: height,
          url: `https://saganize-transaction-website-git-react-native-cdhiraj40.vercel.app/${data.authIdempotencyId}/login?access-token=${data.accessToken}&api-key=${apiKey}&email=${data.email}&platform=react-native`,
        })
      );
    } catch (error) {
      if (error instanceof Error) {
        dispatch(openErrorview(getStatusMessage(error.message)));
        await signOut();
        return;
      }
      dispatch(openErrorview());
      await signOut();
    }
  };

  const createUser = async () => {
    try {
      dispatch(toggleSheetState({ sheetState: sheetState.Loading }));
      await signOut();
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      const { user, idToken } = await GoogleSignin.signIn();

      const data = await CreateUser(user.email, idToken!, apiKey);

      dispatch(initiateUserData(data));
      dispatch(
        openWebview({
          height: height,
          url: `https://saganize-transaction-website-git-react-native-cdhiraj40.vercel.app/${data.authIdempotencyId}/register?access-token=${data.accessToken}&api-key=${apiKey}&email=${data.email}&platform=react-native`,
        })
      );
    } catch (error) {
      if (error instanceof Error) {
        dispatch(openErrorview(getStatusMessage(error.message)));
        await signOut();
        return;
      }
      dispatch(openErrorview());
      await signOut();
    }
  };

  const signOut = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      await GoogleSignin.signOut();
    }
  };

  return { loginUser, createUser };
};
