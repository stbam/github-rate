import React from 'react';
import { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  fullName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: '#586069',
    marginBottom: 5,
  },
  language: {
    padding: 4,
    backgroundColor: '#0366d6',
    color: 'white',
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 5,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  statItem: {
    alignItems: 'center',
  },
  statCount: {
    fontWeight: 'bold',
  }
});



const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryItem = ({ item }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
    <View style={styles.infoContainer}>
      <Text style={styles.fullName}>Full name: {item.fullName}</Text>
      <Text style={styles.description}>Description: {item.description}</Text>
      <Text style={styles.language}>{item.language}</Text>
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{item.forksCount}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{item.stargazersCount}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  </View>
);






const RepositoryList = () => {
    const [repositories, setRepositories] = useState();

    const fetchRepositories = async () => {
      // Replace the IP address part with your own IP address!
      const response = await fetch('http://192.168.1.4:5001/api/repositories');
      const json = await response.json();
  
      console.log(json);
  
      setRepositories(json);
    };
  
    useEffect(() => {
      fetchRepositories();
    }, []);
  
    // Get the nodes from the edges array
    const repositoryNodes = repositories
      ? repositories.edges.map(edge => edge.node)
      : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};




export default RepositoryList;
