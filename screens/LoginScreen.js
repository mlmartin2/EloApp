import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import LoginInput from "../components/LoginInput";
import LogoElo from '../assets/LogoElo.png'

const styles = StyleSheet.create({
    logo: {
      height:100,
      width:100,
    },
    head: {
      flex: 1,
      backgroundColor: '#171b1c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    body: {
      paddingTop:30,
      flex: 3,
      alignItems:'center',
    },
    title: {
      fontSize:20,
      fontWeight:'bold',
      color:'#171717'
    },
    horizontalLine: {
      borderBottomWidth:2,
      width: '50%',
      flex:1
    },
    LoginContainer: {
        paddingTop: 40,
        justifyContent: 'center',
        alignItems:'center',
    },
  });

function LoginScreen({ navigation }) {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={{ flex: 4 }}>
            <View style={styles.head}>
                <Image style={styles.logo} source={LogoElo} />
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>Gerenciamento de Leads</Text>
                <View style={styles.LoginContainer}>
                    <Text style={{ fontSize: 20 }}>Login</Text>
                    <LoginInput value={user} onChangeText={setUser} placeholder='Usuário'/>
                    <LoginInput value={password} onChangeText={setPassword} placeholder='Senha' secure={true} />
                    <View style={{ paddingTop: 30 }}>
                        <Button onPress={() => navigation.navigate('Home')} title="Login" color='#171717' />
                    </View>
                </View>
                <View style={{ position:'absolute', bottom:50 }}>
                    <Button onPress={() => navigation.navigate('Sign Up')} title="Cadastro" color='#f9b233' />
                </View>
            </View>
        </View>
    )
}

export default LoginScreen