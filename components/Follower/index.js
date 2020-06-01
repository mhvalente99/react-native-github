import React from 'react';
import { View, Image, Text} from 'react-native';

import styles from './styles';

function Follower (props) {
  return(
    <View style={ styles.wrappUser }>
        <View style={ styles.wrappAvatar }>
          <Image 
            style={ styles.avatar }
            source={{ uri: props.avatar }}
          />
        </View>
        <View>
          <Text style={ styles.name }>{props.name}</Text>
          <Text style={ styles.username }>{props.login}</Text>
        </View>
      </View>
  )
}

export default Follower;
