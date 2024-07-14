import React from 'react';
import { Route, Routes, Navigate,Link} from 'react-router-native';

import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import RepositoryList from './RepositoryList'; // Adjust the path if necessary
import BigBlueText from './BlueText';
import AppBar from './AppBar';
import SignIn from './SignIn';
const styles = StyleSheet.create({
 container:{
    backgroundColor:'#e1e4e8'
 }
});

const Main = ({ repositories }) => {
  return (
    <View style={styles.container}>
        <AppBar></AppBar>
      <Text>Rate Repository Application</Text>
   {/*   <RepositoryList repositories={repositories} />*/}
      
     <Link to="/SignIn">
        <Text >Sign In</Text>
      </Link>

      <Link to="/RepositoryList">
        <Text >Go Back</Text>
      </Link>


      <Routes>
        <Route path="/" element={<RepositoryList />} /> {/* This duplicates the items*/}
        <Route path="*" element={<Navigate to="/" replace />} />
        
        <Route path="/SignIn" element={<SignIn/>} />
        
      </Routes>


    </View>
  );
};

export default Main;
