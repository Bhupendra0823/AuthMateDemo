import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Platform } from 'react-native';
function HomePage({ navigation }: any) {
  const logout = () => {

    if (Platform.OS === 'web') {

      var url = "https://authmate.onrender.com/auth.mate/logout"
    } else {

      var url = "https://authmate.onrender.com/auth.mate/logout"
    }


    fetch(url, {
      method: 'POST',
      headers: {
        
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.error(error);
      });


    Alert.alert("Logged Out", "You have been successfully logged out.");
    // Navigate to Login screen or perform other actions
    navigation.replace('Login'); // Assuming you have a 'Login' screen in your navigation stack
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Logout Button */}
      <TouchableOpacity
        onPress={logout}
        style={{
          position: 'absolute',
          top: 40,
          right: 20,
          padding: 10,
          backgroundColor: '#FF6347',
          borderRadius: 5,
        }}
      >
        <Text style={{ color: '#fff' }}>Logout</Text>
      </TouchableOpacity>

      <Text>This is Home Page.</Text>
    </View>
  );
}

export default HomePage;
