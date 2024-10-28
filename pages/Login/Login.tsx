import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Platform } from "react-native";

export default function Login({ navigation }:any) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const platform = Platform.OS;
  // Function to perform login request
  const handleLogin = async () => {
    try {
      var url = ""
      if(platform==="web"){
        url = "https://authmate.onrender.com/auth.mate/login" 
      }
      else{
         url = "https://authmate.onrender.com/auth.mate/login"
      }
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
              
                identifier: userName,
                password: password,
            }),
        });

        const responseData = await response.json();
        console.log(responseData);
        if (response.status === 200) {
            console.log('Login Successful:', responseData);
            Alert.alert('Success', 'Login Successful');
            navigation.navigate('Home'); // Adjust this as needed
        } else {
            console.log('Login Failed:', responseData);
            Alert.alert('Login Failed', responseData.msg || 'Invalid username or password');
        }
    } catch (error) {
        console.error("Error during login:", error);
        Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={userName}
        onChangeText={setUserName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} // To hide password text
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.prompt}>Don't have an account?</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  prompt: {
    marginTop: 20,
    marginBottom: 10,
  },
});
