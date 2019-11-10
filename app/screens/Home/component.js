import React from 'react'
import MainScreen from '../../components/layouts/MainScreen'
import {
    Text,
    Button
} from 'native-base'
import { onSignOut } from '../../helper/Auth'

class Component extends React.Component {

    signoutUser = async () => {
        await onSignOut()
        this.props.navigation.navigate('Signin')
    }

    render(){
        return (
            <MainScreen>
                <Text>Home</Text>
                <Button onPress={this.signoutUser}>
                    <Text>Sign Out</Text>
                </Button>
            </MainScreen>
        )
    }
}

export default Component