import AsyncStorage from '@react-native-community/async-storage';

export const onSign = async (userToken) => await AsyncStorage.setItem('userToken', userToken);

export const onSignOut = async () => await AsyncStorage.removeItem('userToken');

export const isSignedIn = async () => await AsyncStorage.getItem('userToken');