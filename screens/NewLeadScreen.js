import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import LogoElo from '../assets/LogoEloFullUpdate.png'
import LoginInput from "../components/LoginInput";
import { signUp_Object } from "../handlers/signupLead";
import { construct_Lead } from "../storage/constructors";
import { opportunities, leadStates } from "../storage/models";

// touchable opacity repetindo com mesmos parametros
// generalizar view

const styles = StyleSheet.create({
    logo: {
      height:100,
      width:100,
    },
    head: {
      flex: 1,
      backgroundColor: '#171b1c',
    },
    body: {
      paddingTop:30,
      flex: 4,
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
    vertLine:
    {
        height:50,
        width:2,
        borderBottomColor:'#000000',
        borderBottomWidth:1
    }
  });

  function submitLead(name = '', phone = '', email = ''){
      const lead = construct_Lead(name, phone, email, '')
      signUp_Object(lead)
  }

export function RenderServicesTable()
{
    let opViewList = []
    opViewList.push(
        <View key={0} style={{alignItems:'center'}}>
            <Text style={{ paddingTop: 20, borderBottomWidth:1}}>Serviços de Interesse</Text>
        </View>
    )
    opportunities.map((op) => {
        opViewList.push(
        <View key={op} style={{justifyContent:'center',borderBottomWidth:1, alignItems:'flex-start'}}>
            <Text key={op} style={{ paddingTop: 20, paddingRight:10, alignSelf:'flex-end'}}>{op}</Text>
        </View>
        )
    })
    return opViewList
}

export default function NewLeadScreen({ route, navigation }) {

    const [userId, setUserId] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const {userid} = route.params
    useEffect(() =>
    {
        setUserId()
    }, [])

    return (
        <View key='Main View' style={{ flex: 5, flexDirection: 'row' }}>
            <View style={styles.head}>
                <View style={{ flex: 4, }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={styles.logo} source={LogoElo} />
                    </View>
                    <View style={{ paddingTop:10, flex: 3, backgroundColor: '#171b1c' }}>
                    <TouchableOpacity 
                        style={{ 
                            justifyContent: 'center', 
                            alignItems: 'center', }}
                            onPress={() => navigation.navigate('Home', { userid: userId })}>
                            <Text style={{ fontWeight: '600', color: '#ffffff' }}>LEADS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop:10,
                            }}>
                            <Text style={{ fontWeight: '600', color:'#f9b233' }}>CADASTRAR LEAD</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{
                            position:'absolute', 
                            bottom:20,
                            right: '50%',
                            justifyContent:'center',
                            borderWidth:1,
                            borderRadius:5,
                            left:20,
                            right:20,
                            paddingTop:5,
                            paddingBottom:5,
                            borderColor:'#e66c47' }}
                        onPress={() => navigation.navigate('Login')}>
                            <Text style={{color:'#e66c47', alignSelf:'center'}}>
                                SAIR
                            </Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View style={{ flex: 5, }}>
                    <View style={{ flex: 1, }}>
                        <Text style={{ fontSize: 30, fontWeight: '600', paddingLeft:40 }}>Cadastro de Novo Lead</Text>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <LoginInput value={name} onChangeText={setName} placeholder='Nome' secure={false} />
                            <LoginInput value={email} onChangeText={setEmail} placeholder='E-mail' secure={false} />
                            <LoginInput value={phone} onChangeText={setPhone} placeholder='Telefone' secure={false} />
                            <Button onPress={() => submitLead(name, phone, email)} title="Cadastrar" />
                        </View>
                        <View style={{ flex: 2, flexDirection:'row',  }}>
                            <View style={{ flex: 1, paddingLeft:20  }}>
                                {RenderServicesTable()}
                            </View>
                            <View style={{ flex: 1,borderLeftWidth:1 }}>
                                {RenderServicesTable()}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}