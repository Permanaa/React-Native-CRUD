import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'
import StatusBar from '../../elements/StatusBar'

export default class Component extends React.Component {
    render(){
        const { children, style } = this.props
        return (
            <View style={[styles.container, style]}>
                <StatusBar />
                {children}
            </View>
        )
    }
}

Component.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.any]).isRequired,
    style: PropTypes.object
}

Component.defaultProps = {
    style: {}
  };