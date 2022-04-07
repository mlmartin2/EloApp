import React from "react";
import { View, TextInput, StyleSheet} from 'react-native';

const SignupButton = () =>
{
    return (
        <View style={[styles.LoginInputContainer, {paddingTop:paddingTop}]}>
            <TextInput secureTextEntry={secure} placeholder={placeholder} style={styles.LoginInputStyle}  />
        </View>
    )
}

const styles = StyleSheet.create({
    LoginInputContainer: {
        paddingTop: 20, 
        borderBottomWidth: 1
    },
    LoginInputStyle: {
        textAlign: 'center', 
        outlineStyle:'none'
    }
  });

  export default LoginInput