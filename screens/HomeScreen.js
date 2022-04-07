import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import LoginInput from "../components/LoginInput";
import LogoElo from '../assets/LogoEloFull.png'

const styles = StyleSheet.create({
    logo: {
      height:100,
      width:100,
    },
    head: {
      flex: 1,
      backgroundColor: '#2e3334',
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

function HomeScreen({ navigation }) {

    const [user, setUser] = useState('')
    return (
        <View key='Main View' style={{ flex: 5, flexDirection: 'row' }}>
            <View style={styles.head}>
                <View style={{ flex: 4, }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 2, borderBottomColor: '#ffffff' }}>
                        <Image style={styles.logo} source={LogoElo} />
                    </View>
                    <View style={{ paddingTop:10, flex: 3, backgroundColor: '#2e3334' }}>
                        <Button title="Leads Atuais" color='#f9b233'/>
                        <Button title="Novo Lead" color='#171b1c'/>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View style={{flexDirection:'column', flex: 4, }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{fontSize:30, fontWeight:'600'}}>Situação dos Leads</Text>
                    </View>
                    <View style={{ flex: 3, backgroundColor:'#000000' }}>
                        <Text> BBBBBBBBBB </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen

{/* <View style={{ flex: 4 }}>
<View style={styles.head}>
    <View style={{ flex: 5, flexDirection: 'row', borderLeftWidth:1 }}>
        <View style={{ flex: 1, alignItems:'center', justifyContent:'center'}}>
            <Image style={styles.logo} source={LogoElo} />
        </View>
        <View style={{ flex: 4, backgroundColor:'#f2f2f2', alignItems:'center', justifyContent:'center' }}>
            <Text style={{fontSize:30}}>Painél de Leads</Text>
        </View>
    </View>
</View>
<View style={styles.body}>

</View>
</View> */}