import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';

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
    LoginContainer: {
        paddingTop: 40,
        justifyContent: 'center',
        alignItems:'center',
    },
    LoginScreenInputContainer: {
        paddingTop: 20, 
        borderBottomWidth: 1
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
                    <View style={{ paddingTop: 20, borderBottomWidth: 1 }}>
                        <TextInput placeholder="Usuário" style={{ textAlign: 'center', outlineStyle:'none'}} />
                    </View>
                    <View style={{ paddingTop: 40, borderBottomWidth: 1 }}>
                        <TextInput secureTextEntry placeholder="Senha" style={{ textAlign: 'center', outlineStyle:'none' }} />
                    </View>
                    <View style={{ paddingTop: 20, borderBottomWidth: 1 }}>
                        <TextInput secureTextEntry placeholder="Confirmar Senha" style={{ textAlign: 'center', outlineStyle:'none' }} />
                    </View>
                    <View style={{ paddingTop: 30 }}>
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