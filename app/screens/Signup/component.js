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
            name: '',
            email: '',
            password: '',
            confirmPass: '',
            loading: false,
            error: null,
            errorPass: null,
            hidePassword: true,
            hidePassConfirm: true,
            passIcon: 'eye',
            passIconConfirm: 'eye'
        }
    }

    signupUser = () => {
        const { name, email, password, confirmPass } = this.state

        if( confirmPass !== password){
            this.setState({
                error: true,
                errorPass: true,
            })
            return false
        }

        if( email === '' || password === '' || name === ''){
            this.setState({
                error: true
            })
        }
        
        this.setState({
            error: false,
            loading: true
        })

        axios.post("http://18.212.31.183/api/register", {
            name: name,
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
                loading: false
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

    showPassConfirm = () => {
        const {hidePassConfirm} = this.state        

        if (hidePassConfirm === true) {
            this.setState({
                hidePassConfirm: !this.state.hidePassConfirm,
                passIconConfirm: 'eye-off'
            })
        } else {
            this.setState({
                hidePassConfirm: !this.state.hidePassConfirm,
                passIconConfirm: 'eye'
            })
        }
    }

    onConfirmPass = async (text) => {
        const { password } = this.state

        this.setState({
            confirmPass: text
        })

        if (password !== text){            
            this.setState({
                errorPass: true
            })
        } else {
            this.setState({
              errorPass: false  
            })
        }
    }

    render(){
        const {
            name,
            email,
            password,
            error,
            errorPass, 
            loading, 
            confirmPass,
            hidePassword, 
            hidePassConfirm,
            passIcon,
            passIconConfirm
        } = this.state
        const { navigate } = this.props.navigation
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
                                    <Text style={[styles.text, styles.title]}>Daftar</Text>
                                    {
                                        (error && errorPass)
                                        ?
                                        <Text style={styles.text_err}>Isi dengan benar</Text>
                                        :
                                        <Text></Text>
                                    }
                                </View>
                            <View style={styles.form_section}>
                                <View style={styles.form_wrapper}>
                                    <Text style={styles.text}>Nama</Text>
                                    <Item  style={styles.form_input}>
                                        <Input
                                            value={name}
                                            style={[styles.form_input,styles.text]}
                                            onChangeText={(text) => this.setState({ name: text})}
                                        />
                                    </Item>
                                </View>
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
                                <View style={styles.form_wrapper}>
                                    <Text style={styles.text}>Konfirmasi password</Text>
                                    <Item style={styles.form_input}>
                                        <Input 
                                            value={confirmPass}
                                            secureTextEntry={hidePassConfirm} 
                                            style={[styles.form_input,styles.text]}
                                            onChangeText={(text) => this.onConfirmPass(text)}
                                        />
                                        <TouchableOpacity onPress={this.showPassConfirm} style={styles.pass_icon}>
                                            <Icon active name={passIconConfirm} style={[styles.text, styles.pass_icon]} />
                                        </TouchableOpacity>
                                    </Item>
                                    {
                                        (confirmPass !== '' && errorPass)
                                        ?
                                        <Text style={styles.text_err}>Password tidak sama</Text>
                                        :
                                        <Text></Text>
                                    }
                                </View>
                            </View>
                            <View>
                                <Button 
                                    style={styles.btn_submit}
                                    onPress={this.signupUser}
                                >
                                    <Text>Daftar</Text>
                                </Button>
                                <View style={styles.other_option}>
                                    <Text style={styles.text}>Sudah punya akun? </Text>
                                    <TouchableOpacity onPress={() => navigate('Signin')}>
                                        <Text style={styles.btn_other}>Masuk</Text>
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