/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';

const App = () => {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const login = () => {
    Alert.alert("Welcome", `Email : ${userEmail}, Password : ${userPassword}`)
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

      <Text style={{fontSize: 200}}>🌌</Text>

      <View style={styles.input}>
        <TextInput placeholder="Enter your email." onChangeText={(text) => setUserEmail(text)}/>
      </View>

      <View style={styles.input}>
        <TextInput placeholder="Enter your password." onChangeText={(password) => setUserPassword(password)}
        secureTextEntry={true}/>
      </View>

      <Button title="Sign In" 
      onPress={() => login()}/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e0e0e0',
    margin: 5,
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.1,
    borderRadius: 10,
  },
});
