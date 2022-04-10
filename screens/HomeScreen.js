import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import LoginInput from "../components/LoginInput";
import LogoElo from '../assets/LogoEloFullUpdate.png'
import { get_Entry } from "../handlers/dbhandler";

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
      alignItems:'center',
      flexDirection:'column'
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


function HomeScreen({ route, navigation }) {

    const [user, setUser] = useState()
    const [userId, setUserId] = useState()
    const {userarg, userid} = route.params;

    useEffect(() =>
    {
        setUserId(userid)
        if(userarg == undefined)
        {const _user = get_Entry('Users', userId); setUser(user)}
        else (setUser(userarg))
    }, [])

    return (
        <View key='Main View' style={{ flex: 5, flexDirection: 'row' }}>
            <View style={styles.head}>
                <View style={{ flex: 4, }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={styles.logo} source={LogoElo} />
                    </View>
                    <View style={{ paddingTop: 10, flex: 3, backgroundColor: '#171b1c' }}>
                        <TouchableOpacity 
                        style={{ 
                            justifyContent: 'center', 
                            alignItems: 'center', }}>
                            <Text style={{ fontWeight: '600', color: '#f9b233' }}>LEADS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('New Lead', { userid: userId })}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop:10,
                            }}>
                            <Text style={{ fontWeight: '600', color:'#ffffff' }}>CADASTRAR LEAD</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{
                            position:'absolute', 
                            bottom:20,
                            right: '50%',
                            justifyContent:'center'}}
                        onPress={() => navigation.navigate('Login')}>
                            <Text style={{color:'red'}}>
                                SAIR
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View style={{flexDirection:'column', flex: 4, }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{fontSize:30, fontWeight:'600'}}>LEADS</Text>
                    </View>
                    <View style={{ flex: 3, }}>
                        <Text>{user != undefined ? user.name : 'Carregando...' } </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen
