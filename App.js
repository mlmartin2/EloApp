import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
//import * as SQLite from 'expo-sqlite';
import SQLite from 'react-native-sqlite-storage'

// const db = SQLite.openDatabase(
//   { name: 'users', location:'default'},
//   () => {alert('db connected')},
//   (error) => {alert(error)}
// )

// const createTable = () =>
// {
//   db.transaction((tx) => {
//     tx.executeSql(
//     "CREATE TABLE IF NOT EXISTS"+
//     "Users"+
//     "(Id INTEGER PRIMARY KEY AUTOINCREMENT, Nome TEXT, Senha TEXT")
//   })
// }

async function getConnection()
{
  const db = SQLite.openDatabase('elobase.db')
  db.transaction(db.executeSql("CREATE TABLE IF NOT EXISTS"
  +"Users"))
  //alert(db)
  return db
}

// SQLite.enablePromise(true)

// const db = SQLite.openDatabase(
//   { name: 'users', createFromLocation: 1},
//   () => {alert('db connected')},
//   (error) => {alert(error)}
// )

export default function App() {

  const StackNavigator = createNativeStackNavigator();
  const [database, setDatabase] = useState()
  

  useEffect(() =>
  {
    setDatabase(getConnection())
    //getConnection()
  }, [])

  const CreateTable = () =>
  {
    if(database != undefined)
    {
      alert('db exists')
    }    
  }

  CreateTable()

  alert(database)

  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="Login">
        <StackNavigator.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <StackNavigator.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
        <StackNavigator.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}
