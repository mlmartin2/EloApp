import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import * as constructor from './storage/constructors';
import {signUp_Object} from "./handlers/signup";
import { init_Database, get_Column, find_Entry } from "./handlers/dbhandler";

function testelocal()
{
  const testUser2 = constructor.construct_User('ab2d', '12345Adj*aj#');
  signUp_Object(testUser2, '12345Adj*aj#')
  const testUser3 = constructor.construct_User('abcxs', '12345Adj*aj#');
  signUp_Object(testUser3, '12345Adj*aj#')
  const testUser4 = constructor.construct_User('fsdc', '12345Adj*aj#');
  signUp_Object(testUser4, '12345Adj*aj#')
  //signUp('abcd','201df*kDD2$','201df*kDD2$')
  alert(find_Entry('Users', 'name', 'ab2d'))
}

export default function App() {

  const StackNavigator = createNativeStackNavigator();
  const [database, setDatabase] = useState()
  const [dbInit, setDbInit] = useState(false)

  useEffect(() =>
  {
    init_Database()
    // !! Usar p/ debugs dos sistemas:
    try {testelocal()}
    catch(error) {alert(error)}
    // !!
  }, [])

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


