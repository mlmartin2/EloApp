import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import LogoElo from '../assets/LogoEloFullUpdate.png'
import { get_Entry, get_TableObject } from "../handlers/dbhandler";

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
    StatesTableText:
    {
        fontSize:20,
        fontWeight:'600',
        alignSelf:'center'
    },
    StatesTableItemText:
    {

    }
  });

function GenLeadStatesList()
{
    const leads = get_TableObject('Leads')
    const leadkeys = Object.keys(leads);
    var table = []
    var listItems = []
    table.push(
    <View style={{flexDirection:'row', flex: 3}}>
        <View style={{flex:1, alignItems:'flex-end'}}><Text style={styles.StatesTableText}>Cliente em Potencial</Text></View>
        <View style={{flex:1, alignItems:'center'}}><Text style={styles.StatesTableText}>Dados Confirmados</Text></View>
        <View style={{flex:1, alignItems:'flex-start'}}><Text style={styles.StatesTableText}>Reunião Agendada</Text></View>
    </View>)
    for(let i = 0; i < leadkeys.length; i++)
    {

        const lead = leads[leadkeys[i]]
        for(let j = 0; j < 3; j++)
        {
            if(lead.state == j)
            {
                listItems.push(
                    <TouchableOpacity
                        onPress={() => alert('change state')}
                        style={styles.StatesTableItemText}
                        key={i}>
                        {lead.name}
                    </TouchableOpacity>
                )
            }
            else{
                listItems.push(
                    <Text key={i}></Text>
                )
            }
        }
        table.push(
            <View style={{ flexDirection: 'row',  flex: 3 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                {listItems[0]}
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                {listItems[1]}
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                {listItems[2]}
            </View>
        </View>)
            // <View style={{ flexDirection: 'row',  flex: 3 }}>
            //     <View style={{ flex: 1, alignItems: 'center' }}>
            //         <TouchableOpacity 
            //         style={styles.StatesTableItemText}>
            //             {stateitems[0]}
            //         </TouchableOpacity>
            //     </View>
            //     <View style={{ flex: 1, alignItems: 'center' }}>
            //         <TouchableOpacity style={styles.StatesTableItemText}>
            //             {stateitems[1]}
            //         </TouchableOpacity>
            //     </View>
            //     <View style={{ flex: 1, alignItems: 'center' }}>
            //         <TouchableOpacity style={styles.StatesTableItemText}>
            //             {stateitems[2]}
            //         </TouchableOpacity>
            //     </View>
            // </View>)
    }
    return table
}


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
                <View style={{ flexDirection: 'column', flex: 4, }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontSize: 30, fontWeight: '600' }}>LEADS</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <View style={{flex: 1}}>{GenLeadStatesList()}</View>
                        <View style={{flex:2}}></View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen
