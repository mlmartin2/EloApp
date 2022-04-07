import { StyleSheet, Text, View, Image } from 'react-native';
import LogoElo from './assets/LogoElo.png'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignupScreen';

export default function App() {

  const StackNavigator = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="Login">
        <StackNavigator.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <StackNavigator.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}
