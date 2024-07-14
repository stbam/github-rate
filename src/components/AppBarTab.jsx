import { View, StyleSheet,Pressable,onPressFunction,Text,Alert} from 'react-native';
import { Route, Routes, Navigate,Link} from 'react-router-native';

import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    //paddingTop: Constants.statusBarHeight,
   // backgroundColor: '#24292e',
    //height:56,
   //justifyContent:'space-between',
   //paddingHorizontal: 16,
   //alignItems: 'center',
  flexDirection:'row',
  gap:15

        // ...
  },
  text:{
    color:'white',
    fontSize:20,
  },

  // ...
});
const AppBarTab = () => {
    const onPressFunction=()=>{
        Alert.alert('Alert', 'Pressable pressed!', [{ text: 'OK' }]);
    }
    return ( 
    <>
    <View style={styles.container} >{/* ... */}
        <Pressable onPress={onPressFunction}>
            <Text style={styles.text} >I'm pressable!</Text>
        </Pressable>

        <Link  to="/SignIn">
                     <Text style={styles.text}>Sign In</Text>
                </Link>

            <Link  to="/RepositoryList">
                <Text style={styles.text} >Go Back</Text>
            </Link>
        
    </View>
    </>
     );
}
 
export default AppBarTab;