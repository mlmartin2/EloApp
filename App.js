import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import NewLeadScreen from "./screens/NewLeadScreen";
import { init_Database } from "./handlers/dbhandler";
import {RenderServicesTable} from "./screens/NewLeadScreen"

function testelocal()
{
  RenderServicesTable()
  //signUp('Martin','dsiojx*wwDkx12','dsiojx*wwDkx12')
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
        <StackNavigator.Screen name="New Lead" component={NewLeadScreen} options={{headerShown:false}}/>
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}


