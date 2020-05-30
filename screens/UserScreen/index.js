import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './styles';
import api from '../../services/api';

function UserScreen(){
  const route = useRoute();
  const navigation = useNavigation();

  const [data, setData] = useState({});

  const { user } = route.params;
  
  useEffect( ()=> {
    api.get('/' + user).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  function handleNavigateFollowers() {
    navigation.navigate('Followers')
  }

  return(
    <SafeAreaView style={ styles.container }>
      <View style={ styles.wrappProfile }>
        <Image 
          style={ styles.avatar }
          source={{ uri: data.avatar_url }}
        />
        <Text style={ styles.user }>{ data.name }</Text>
        <Text style={ styles.bio }>{ data.bio }</Text>
      </View>
      <View style={ styles.wrappButton }>
        <TouchableOpacity 
          style={ styles.button }
          onPress={ () => { handleNavigateFollowers() } }
        >
          <Text style={ styles.titleButton }>seguidores</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default UserScreen;
