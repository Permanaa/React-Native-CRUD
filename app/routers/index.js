import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import {
    AuthLoadingStack,
    SigninStack,
    SignupStack,
    HomeStack,
    SettingStack
} from './stackNavigator'

const switchNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingStack,
        Signin: SigninStack,
        Signup: SignupStack,
        Home: HomeStack,
        Setting: SettingStack
    },
    {
        initialRouteName: 'AuthLoading'
    }
)

export default createAppContainer(switchNavigator)