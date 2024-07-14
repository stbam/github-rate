import React from 'react';
import { FlatList, View, StyleSheet, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  avatar:{
    width:50,
    height:40
  }
  
});

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const renderItem = ({ item }) => (
  

      <View style={styles}>
        
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <Text >Full name:{item.fullName}</Text>
        <Text>Description: {item.language}</Text>
        <Text>Language: {item.description}</Text>
        <Text>forks: {item.forksCount}</Text>
        <Text> Stars: {item.stargazersCount}</Text>
        <Text>Reviews: {item.reviewCount}</Text>
        <Text>Rating Average: {item.ratingAverage}</Text>
      </View>
 
  );

  return (
    <FlatList
      data={repositories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
      // Other props for FlatList
    />
  );
};

export default RepositoryList;
