import React from 'react';
import axios from 'axios';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { useRoute } from '@react-navigation/native'
import styles from './styles';

const api = axios.create({
  baseURL: "https://api.github.com/users"
});

function UserScreen(){
  const route = useRoute();
  const { user } = route.params;
  
  api.get('/mhvalente99').then((response) => {
    console.log(response);
  })
  return(
    <SafeAreaView style={ styles.container }>
      <View style={ styles.wrappProfile }>
        <Image 
          style={ styles.avatar }
          source={{ uri: 'https://picsum.photos/200/300' }}
        />
        <Text style={ styles.user }>{ user }</Text>
        <Text style={ styles.bio }>"aqui vai a bio"</Text>
      </View>
      <View style={ styles.wrappButton }>
        <TouchableOpacity style={ styles.button }>
          <Text style={ styles.titleButton }>seguidores</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default UserScreen;
