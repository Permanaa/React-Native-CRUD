import React from 'react';
import PropTypes from 'prop-types'
import { StatusBar } from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN } from '../../../styles';

export default class Component extends React.Component {
  render() {
    const { bgColor, color } = this.props
    return <StatusBar backgroundColor={bgColor} barStyle={color} />
  }
}

Component.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string
}

Component.defaultProps = {
  bgColor: COLOR_BASE_PRIMARY_MAIN,
  color: 'dark-content'
}