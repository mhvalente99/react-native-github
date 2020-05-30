import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { Text, View, SafeAreaView, StyleSheet, Image, 
         TextInput, KeyboardAvoidingView, Platform,
         TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserScreen from './screens/UserScreen';
import FollowersScreen from './screens/FollowersScreen';

const Stack = createStackNavigator();

function HomeScreen() {
  const [user, setUser] = useState("mhvalente99");
  const navigation = useNavigation();

  function handleNavigateToInfo() {
    navigation.navigate('User', { user })
  }

  return(
    <SafeAreaView style={ styles.content }>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.select({
        ios: 'padding',
        android: null,
      })}>
      <View style={ styles.wrapperLogo }>
        <Image 
          style={ styles.logo }
          source={{ uri: 'https://image.flaticon.com/icons/png/512/25/25231.png' }}
        />
        <Text style={ styles.textLogo }>GIT MOBILE</Text>
      </View>
      <View style={ styles.wrapperInput }>
        <TextInput
          style={ styles.input }
          placeholder="Informe o usuário"
          placeholderTextColor="#999"
          value={ user }
          onChangeText={setUser}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <TouchableOpacity 
        style={ styles.wrapperButton }
        onPress={ () => { handleNavigateToInfo() }}
      >
        <Text style={ styles.titleButton }>pesquisar</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerShown : false
          }
        }
      >
        <Stack.Screen 
          name="Home" 
          component={ HomeScreen }
        />
        <Stack.Screen
          name="User"
          component={ UserScreen }
        />
        <Stack.Screen
          name="Followers"
          component={ FollowersScreen }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  wrapperLogo: {
    alignItems: "center"
  },  
  logo: {
    width: 95,
    height: 95,
    opacity: 0.8
  },
  textLogo: {
    marginTop: 9,
    fontSize: 24,
    fontWeight: "500",
  },
  wrapperInput: {
    padding: 16,
    height: 48,
    width: "80%",
    marginTop: 24,
    borderRadius: 5,
    borderColor: "#999",
    borderWidth: 1,
  },
  wrapperButton: {
    backgroundColor: "#3F3637",
    marginTop: 16,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderRadius: 5
  },
  titleButton: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: 18
  }
})
