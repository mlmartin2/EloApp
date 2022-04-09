import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';

function testelocal()
{
  let userDB = []
  let user1 = {nome:'Martin', id:'1'}
  let user2 = {nome:'Alado', id:'2'}
  let user3 = {nome:'Samuel', id:'3'}
  let user4 = {nome:'Levi', id:'4'}
  userDB.push(user1)
  userDB.push(user2)
  userDB.push(user3)
  userDB.push(user4)
  
  alert(userDB[0].nome)
}

export default function App() {

  const StackNavigator = createNativeStackNavigator();
  const [database, setDatabase] = useState()
  const [dbInit, setDbInit] = useState(false)

  useEffect(() =>
  {
    testelocal()
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


