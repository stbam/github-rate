import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import RepositoryList from './RepositoryList'; // Adjust the path if necessary
import BigBlueText from './BlueText';
import AppBar from './AppBar';
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
      <RepositoryList repositories={repositories} />
      <BigBlueText></BigBlueText>
    </View>
  );
};

export default Main;
