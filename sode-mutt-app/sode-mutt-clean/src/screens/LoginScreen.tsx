import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginScreen({ navigation }: any) {

  const fakeLogin = () => {
    // Temporary login
    navigation.replace('Home');
  };

  return (
    <View style={{ flex:1, justifyContent:'center', padding:20 }}>

      <Text style={{ fontSize:24, textAlign:'center', marginBottom:20 }}>
        Sode Mutt Login
      </Text>

      <Button title="Login" onPress={fakeLogin} />

    </View>
  );
}
