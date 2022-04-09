import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import * as constructor from './models/constructors';
import val from './handlers/validators';
import signUp from "./handlers/signup";
import { init_Database } from "./handlers/dbhandler";

function testelocal()
{
  init_Database()
  let testUser = constructor.construct_User('abcd', '12345Adj*aj#');
  alert(testUser.name)
  alert(val(testUser, []))
  signUp('abcd','201df*kDD2$','201df*kDD2$')
}

export default function App() {

  const StackNavigator = createNativeStackNavigator();
  const [database, setDatabase] = useState()
  const [dbInit, setDbInit] = useState(false)

  useEffect(() =>
  {
    try {testelocal()}
    catch(error) {alert(error)}
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


