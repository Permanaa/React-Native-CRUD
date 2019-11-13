import { createStackNavigator } from 'react-navigation-stack'
import AuthLoading from '../screens/AuthLoading'
import Signin from '../screens/Signin'
import Signup from '../screens/Signup'
import Home from '../screens/Home'
import Setting from '../screens/Setting'

export const AuthLoadingStack = createStackNavigator(
    {
        AuthLoading: {
            screen: AuthLoading
        }
    },
    {
        headerMode: 'none'
    }
)

export const SigninStack = createStackNavigator(
    {
        Signin: {
            screen: Signin
        }
    },
    {
        headerMode: 'none'
    }
)

export const SignupStack = createStackNavigator(
    {
        Signup: {
            screen: Signup
        }
    },
    {
        headerMode: 'none'
    }
)

export const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home
        }
    },
    {
        headerMode: 'none'
    }
)

export const SettingStack = createStackNavigator(
    {
        Setting: {
            screen: Setting
        }
    },
    {
        headerMode: 'none'
    }
)