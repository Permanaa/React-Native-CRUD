import React from 'react'
import {
    View,
    TouchableOpacity
} from 'react-native'
import {
    Text,
    Icon
} from 'native-base'
import MainScreen from '../../components/layouts/MainScreen'
import styles from './style'

class Component extends React.Component {
    render(){
        const { navigate } = this.props.navigation
        return(
            <MainScreen style={styles.container}>
                <TouchableOpacity onPress={() => navigate('Home')}>
                    <Icon active name='arrow-round-back' style={styles.text_color2}/>
                </TouchableOpacity>
                <Text style={[styles.text_color2, styles.title]}>Settings</Text>
            </MainScreen>
        )
    }
}

export default Component