import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
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

// async function getConnection()
// {
//   const db = SQLite.openDatabase('elobase.db')
//   db.transaction(db.executeSql("CREATE TABLE IF NOT EXISTS"
//   +"Users"))
//   //alert(db)
//   return db
// }

// SQLite.enablePromise(true)

// const db = SQLite.openDatabase(
//   { name: 'users', createFromLocation: 1},
//   () => {alert('db connected')},
//   (error) => {alert(error)}
// )



SQLite.enablePromise(true)

const db = SQLite.openDatabase({name:'elodb'})
.then((datab) => {alert(datab)})

export default function App() {

  const StackNavigator = createNativeStackNavigator();
  const [database, setDatabase] = useState()
  const [dbInit, setDbInit] = useState(false)

  //alert(promise)

  useEffect(() =>
  {

    //db.then(() => {alert(db)}, (error) => {alert(error)} )
    // db.transaction((tx) => tx.executeSql("CREATE TABLE IF NOT EXISTS"
    // +"Users", (error) => alert(error.message + " Error on creating"), () => alert('done'))) 
    // setDatabase(db)
    // getConnection()
    // setDbInit(true)
    // try
    // {
    //   SQLite.openDatabase({name: 'elobase', location:'default'},() => alert('top'), (e) => alert(e.text))
    // }
    // catch(error)
    // {
    //   alert(error.text)
    // }
    //dBase()
    createTables()
  }, [])

  const createTables = () => 
  {
    try
    {
      alert(database)
      // database.then((tx) => tx.transaction((tx) => {
      //   tx.executeSql('CREATE TABLE IF NOT EXISTS'+'User')
      // }),(error) => alert(error + 'error load'))
    }
    catch(error)
    {
      alert(error.message)
    }
  }
  // async function TryDB()
  // {
  //   try
  //   {
  //     results = await Database.excuteSql("SQL",['params']);
  //   }
  //   catch(e)
  //   {
   
  //   }
  // }

  // useEffect(() => 
  // {
  //   if(dbInit)
  //   {
  //     try
  //     {
  //       database.transaction((tx) =>
  //       {
  //         tx.executeSql("CREATE TABLE IF NOT EXISTS " + "Users")
  //       })
  //     }
  //     catch(error) {alert(error.message)}
  //   }
  // }, [dbInit])

  console.log('a')

  // const ReadTable = () =>
  // {
  //   if(database != undefined)
  //   {
  //     alert(database + 'connection')
  //     try{database.transaction((tx) => {
  //       tx.executeSql('SELECT * FROM Users', [], (tx) => alert('a'), (tx, err) => alert(err.message + "read error") )
  //     })}
  //     catch(error){ { alert(error + "@ ReadTable()")}} 
  //   }  
  // }

  // const CreateTable = () =>
  // {
  //   try
  //   {
  //     alert('creating table')
  //     database.transaction((tx) =>
  //     {
  //       tx.executeSql('CREATE TABLE IF NOT EXISTS'
  //       +'User')
  //     })
  //   }
  //   catch(error)
  //   {
  //     alert(error + "@ CreatTable()")
  //   }
  // }

  //try {CreateTable()}
  //catch(error) {alert(error)}

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
