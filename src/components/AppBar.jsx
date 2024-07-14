import { View, StyleSheet,Pressable,onPressFunction,Text,Alert} from 'react-native';
import Constants from 'expo-constants';
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

    <Pressable onPress={onPressFunction}>
        <Text style={styles.text} >I'm pressable!</Text>
    </Pressable>

    </View>



  </>
  )
};
export default AppBar;