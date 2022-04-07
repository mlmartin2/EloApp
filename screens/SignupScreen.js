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
      backgroundColor: '#272727',
      alignItems: 'center',
      justifyContent: 'center',
    },
    body: {
      paddingTop:30,
      flex: 3,
      alignItems:'center',
    },
  });

function SignUpScreen({ navigation }) {

    return (
        <View style={{ flex: 4 }}>
            <View style={styles.head}>
                <Image style={styles.logo} source={LogoElo} />
            </View>
            <View style={styles.body}>
                <View style={styles.LoginContainer}>
                    <Text style={{ fontSize: 20 }}>Cadastro</Text>
                    <LoginInput placeholder="Usuário" paddingTop={30} />
                    <LoginInput placeholder="Senha" paddingTop={40} />
                    <LoginInput placeholder="Confirmar Senha"/>
                    <View style={{ paddingTop: 70 }}>
                        <Button title="Cadastrar" color='#f9b233' />
                    </View>
                </View>
                <View style={{ position:'absolute', bottom:50 }}>
                    <Button onPress={() => navigation.navigate('Login')} title="Voltar" color='#171717' />
                </View>
            </View>
        </View>
    )
}

export default SignUpScreen