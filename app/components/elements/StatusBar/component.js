import React from 'react';
import { StatusBar } from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN } from '../../../styles';

export default class Component extends React.Component {
  render() {
    return <StatusBar backgroundColor={COLOR_BASE_PRIMARY_MAIN} barStyle="dark-content" />
  }
}