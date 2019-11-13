import {StyleSheet} from 'react-native'
import { 
    COLOR_WHITE,
    COLOR_BASE_ACCENT,
    COLOR_BASE_PRIMARY_DARK,
    COLOR_TEXT
} from '../../styles'

const styles = StyleSheet.create({
    text_color: {
        color: COLOR_WHITE
    },
    text_color2: {
        color: COLOR_TEXT
    },
    container: {
        padding: 20,
        backgroundColor: COLOR_BASE_PRIMARY_DARK
    },
    wrapper: {
        padding: 20,
        borderRadius: 30,
        marginBottom: 30,
        backgroundColor: COLOR_WHITE,
    },
    slogan_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom:20
    },
    header_section: {
        backgroundColor: COLOR_BASE_ACCENT,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    name_user: {
        fontSize: 20,
        marginBottom: 5
    },
    icon_header_wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon_header: {
        color: COLOR_WHITE,
        marginEnd: 15,
        fontSize: 50
    },
    subtitle_wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    icon_subtitle: {
        color: COLOR_TEXT,
        marginEnd: 10,
    },
    horizontalLine: {
        borderBottomColor: COLOR_TEXT,
        marginTop: 20,
        marginBottom: 20,
        borderBottomWidth: 0.5,   
    }
})

export default styles