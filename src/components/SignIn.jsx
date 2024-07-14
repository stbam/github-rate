import React,{useState} from 'react';

import Text from './Text';

import { TextInput, Pressable, View,StyleSheet} from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';


import theme from './theme';
styles=StyleSheet.create({
    input: {
        height: theme.boxDim.height,
        width: theme.boxDim.width,
        backgroundColor: theme.boxDim.backgroundColor,
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: theme.colors.textSecondary,
      },
      text:{
        justifyContent:'center',
      }
  
})



const SignIn = () => {
    const [userName,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const onSubmit = () => {
        console.log({userName,password});
      };

  return (
    <View style={styles.box}>{/*inputDim={"inputDim"}*/}
                 <Text  color={"primary"} fontSize={"subheading"} fontWeight={"bold"} >The sign-in view</Text>

                    <TextInput value={userName} onChangeText={setUsername} style={styles.input} inputDim={"inputDim"}  placeholder='Username'/>
                    <TextInput value={password} onChangeText={setPassword}style={styles.input}  placeholder='Password'/>
                    
                    <Pressable  onPress={onSubmit} style={{...styles.input,backgroundColor:'#0366d6'}} >
                        <Text style={{...styles.text, textAlign:'center'}} color={'default'} >Sign In</Text>
                     </Pressable>
    </View>
 
  
  )
};

export default SignIn;

