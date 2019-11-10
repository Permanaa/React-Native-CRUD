import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import {
    AuthLoadingStack,
    SigninStack,
    SignupStack,
    HomeStack
} from './stackNavigator'

const switchNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingStack,
        Signin: SigninStack,
        Signup: SignupStack,
        Home: HomeStack
    },
    {
        initialRouteName: 'AuthLoading'
    }
)

export default createAppContainer(switchNavigator)