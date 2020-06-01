import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import styles from './styles';

import api from '../../services/api'
import Follower from '../../components/Follower'

function FollowersScreen(){
  const [followers, setFollowers] = useState([]);

  useEffect(()=> {
    api.get('/mhvalente99/followers').then( (response) => {
      setFollowers(response.data)
    })
  }, []);

  return(
    <SafeAreaView style={ styles.container }>
      <FlatList 
        data={followers}
        renderItem={ ({item}) =>  (<Follower avatar={item.avatar_url} name={item.login}/>)}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default FollowersScreen;