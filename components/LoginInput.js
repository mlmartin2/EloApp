import React from "react";
import { View, TextInput, StyleSheet} from 'react-native';

const LoginInput = ({value, onChangeText,placeholder='', secure = false, paddingTop = 20}) =>
{
    return (
        <View style={[styles.LoginInputContainer, {paddingTop:paddingTop}]}>
            <TextInput value={value} onChangeText={onChangeText} secureTextEntry={secure} placeholder={placeholder} style={styles.LoginInputStyle}  />
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