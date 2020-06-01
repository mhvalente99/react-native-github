import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import styles from './styles';

import Follower from '../../components/Follower'

const followers = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
]

function FollowersScreen(){
  return(
    <SafeAreaView style={ styles.container }>
      <FlatList 
        data={followers}
        renderItem={ ({item}) =>  (<Follower />)}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default FollowersScreen;