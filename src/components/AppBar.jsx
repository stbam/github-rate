import { View, StyleSheet,Pressable,onPressFunction,Text,Alert,ScrollView} from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    height:56,
   justifyContent:'space-between',
   paddingHorizontal: 16,
   alignItems: 'center',
   flexDirection:'row'

        // ...
  },
  text:{
    color:'white',
    fontSize:20,
  },
  // ...
});
const AppBar = () => {
    const onPressFunction=()=>{
        Alert.alert('Alert', 'Pressable pressed!', [{ text: 'OK' }]);
    }
  return (
    <>

    <View style={styles.container} >{/* ... */}
    <ScrollView horizontal >
       { <AppBarTab></AppBarTab>}
    </ScrollView>


       
    </View>



  </>
  )
};
export default AppBar;