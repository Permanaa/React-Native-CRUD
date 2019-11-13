import AsyncStorage from '@react-native-community/async-storage';

export const onSign = async (data) => await AsyncStorage.setItem('userToken', data.access_token);

export const onSignOut = async () => await AsyncStorage.removeItem('userToken');

export const isSignedIn = async () => await AsyncStorage.getItem('userToken');