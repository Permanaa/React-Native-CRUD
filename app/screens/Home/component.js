import React from 'react'
import MainScreen from '../../components/layouts/MainScreen'
import { View, TouchableOpacity } from 'react-native'
import {
    Text,
    Button,
    Icon
} from 'native-base'
import styles from './style'
import { onSignOut } from '../../helper/Auth'
import StatusBar from '../../components/elements/StatusBar'
import { COLOR_BASE_PRIMARY_DARK } from '../../styles'

class Component extends React.Component {

    signoutUser = async () => {
        await onSignOut()
        this.props.navigation.navigate('Signin')
    }

    render(){
        const { navigate } = this.props.navigation
        return (
            <MainScreen style={styles.container}>
                <StatusBar bgColor={COLOR_BASE_PRIMARY_DARK}/>
                <View style={styles.slogan_wrapper}>
                    <Text style={[styles.title, styles.text_color2]}>Belajar kuy</Text>
                    <TouchableOpacity onPress={() => navigate('Setting')}>
                        <Icon active name="settings" style={styles.text_color2}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.wrapper, styles.header_section]}>
                    <Icon active name="contact" style={styles.icon_header}/>
                    <Text style={[styles.text_color, styles.name_user]}>Permana</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.wrapper]}>
                    <View style={styles.subtitle_wrapper}>
                        <Icon active name="bookmarks" style={styles.icon_subtitle}/>
                        <Text style={[styles.text_color2, styles.subtitle]}>Materi</Text>
                    </View>
                    <View style={styles.horizontalLine}/>
                    <Text style={styles.text_color2}>Belajar dulu baru quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.wrapper]}>
                    <View style={styles.subtitle_wrapper}>
                        <Icon active name="checkmark-circle" style={styles.icon_subtitle}/>
                        <Text style={[styles.text_color2, styles.subtitle]}>Quiz</Text>
                    </View>
                    <View style={styles.horizontalLine}/>
                    <Text style={styles.text_color2}>Quiz dulu baru lulus</Text>
                </TouchableOpacity>
            </MainScreen>
        )
    }
}

export default Component