import Text from './Text';
import { TextInput, Pressable, View,StyleSheet} from 'react-native';
import { useFormik } from 'formik';
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
      box:{
        backgroundColor:"white"
      }
})

const SignIn = () => {
  return (
    <View style={styles.box}>{/*inputDim={"inputDim"}*/}
                 <Text  color={"primary"} fontSize={"subheading"} fontWeight={"bold"} >The sign-in view</Text>

                <TextInput style={styles.input} inputDim={"inputDim"}  placeholder='Username'/>
                <TextInput style={styles.input} placeholder='Password'/>
                <Pressable><Text color={"primary"}>Sign In</Text></Pressable>
    </View>
 
  
  )
};

export default SignIn;

