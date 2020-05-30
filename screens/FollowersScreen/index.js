import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';

function FollowersScreen(){
  return(
    <SafeAreaView style={ styles.container }>
      <View style={ styles.wrappUser }>
        <View style={ styles.wrappAvatar }>
          <Image 
            style={ styles.avatar }
            source={{ uri: 'https://avatars3.githubusercontent.com/u/32014139?v=4' }}
          />
        </View>
        <View>
          <Text style={ styles.name }>Matheus Henrique</Text>
          <Text style={ styles.username }>@mhvalente99</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default FollowersScreen;