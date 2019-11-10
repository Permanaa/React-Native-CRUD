import React from 'react';
import { ActivityIndicator } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen'
import { isSignedIn } from '../../helper/Auth'
import styles from './style'
import { COLOR_BASE_ACCENT } from '../../styles'

class Component extends React.Component {
  componentDidMount() {
    this._checkUserToken();
  }

  _checkUserToken = async () => {
    const userToken = await isSignedIn()
    this.props.navigation.navigate(userToken ? 'Home' : 'Signin');
  };

  render() {
    return (
      <MainScreen style={styles.container}>
        <ActivityIndicator
            size="large"
            color={COLOR_BASE_ACCENT}
        />
      </MainScreen>
    );
  }
}

export default Component