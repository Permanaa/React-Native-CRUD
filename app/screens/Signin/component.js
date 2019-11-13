import React from 'react'
import { View, TouchableOpacity, ActivityIndicator } from 'react-native'
import {
    Container,
    Input,
    Item,
    Text,
    Button,
    Icon
} from 'native-base'
import styles from './style'
import MainScreen from '../../components/layouts/MainScreen'
import axios from 'axios';
import { onSign } from '../../helper/Auth'
import { COLOR_BASE_ACCENT } from '../../styles'

export default class Component extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            loading: false,
            error: false,
            hidePassword: true,
            passIcon: 'eye'
        }
    }

    signinUser = () => {
        const { email, password } = this.state

        if( email === '' || password === ''){
            this.setState({
                error: true
            })
        }
        
        this.setState({
            error: false,
            loading: true
        })

        axios.post("http://18.212.31.183/api/login", {
            email: email,
            password: password
        })
        .then((res) => {
            this.setState({
                loading: false
            })
            
            onSign(res.data)
            this.props.navigation.navigate('Home')
        })
        .catch((err) => {
            this.setState({
                error: true,
                loading: false,
            });
        })
    }

    showPass = () => {
        const {hidePassword} = this.state        

        if (hidePassword === true) {
            this.setState({
                hidePassword: !this.state.hidePassword,
                passIcon: 'eye-off'
            })
        } else {
            this.setState({
                hidePassword: !this.state.hidePassword,
                passIcon: 'eye'
            })
        }
    }

    render(){

        const { email, password, error, loading, hidePassword, passIcon } = this.state
        const { navigate } = this.props.navigation;

        return (
            <MainScreen>
                {
                    (loading) 
                    ? 
                    <Container style={styles.container}>
                        <View style={styles.loading}>
                            <ActivityIndicator
                                size="small"
                                color={COLOR_BASE_ACCENT}
                            />
                            <Text style={styles.text}> loading...</Text> 
                        </View>
                    </Container>    
                    :
                    <Container style={styles.container}>
                        <View>
                            <View style={styles.title_wrapper}>
                                <Text style={[styles.text, styles.title]}>Masuk</Text>
                                {
                                    (error)
                                    ?
                                    <Text style={styles.text_err}>Isi dengan benar</Text>
                                    :
                                    <Text></Text>
                                }
                            </View>
                            <View style={styles.form_section}>
                                <View style={styles.form_wrapper}>
                                    <Text style={styles.text}>Email</Text>
                                    <Item  style={styles.form_input}>
                                        <Input 
                                            value={email}
                                            style={[styles.form_input,styles.text]}
                                            onChangeText={(text) => this.setState({ email: text})}
                                        />
                                    </Item>
                                </View>
                                <View style={styles.form_wrapper}>
                                    <Text style={styles.text}>Password</Text>
                                    <Item style={styles.form_input}>
                                        <Input 
                                            value={password}
                                            secureTextEntry={hidePassword} 
                                            style={[styles.form_input,styles.text]}
                                            onChangeText={(text) => this.setState({ password: text})}
                                        />
                                        <TouchableOpacity onPress={this.showPass} style={styles.pass_icon}>
                                            <Icon active name={passIcon} style={[styles.text, styles.pass_icon]} />
                                        </TouchableOpacity>
                                    </Item>
                                </View>
                            </View>
                            <View>
                                <Button 
                                    style={styles.btn_submit}
                                    onPress={this.signinUser}
                                >
                                    <Text>Masuk</Text>
                                </Button>
                                <View style={styles.other_option}>
                                    <Text style={styles.text}>Belum punya akun? </Text>
                                    <TouchableOpacity onPress={() => navigate('Signup')}>
                                        <Text style={styles.btn_other}>Daftar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Container>
                }
            </MainScreen>
        )
    }
}