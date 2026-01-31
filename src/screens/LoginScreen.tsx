import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { auth } from '../config/firebase';
import { signInWithPhoneNumber } from 'firebase/auth';

export default function LoginScreen() {

  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirm, setConfirm] = useState<any>(null);

  const sendOTP = async () => {
    try {
      const result = await signInWithPhoneNumber(auth, phone);
      setConfirm(result);
      Alert.alert("OTP Sent");
    } catch (e:any) {
      Alert.alert("Error", e.message);
    }
  };

  const verifyOTP = async () => {
    try {
      await confirm.confirm(otp);
    } catch {
      Alert.alert("Invalid OTP");
    }
  };

  return (
    <View style={{ padding:20 }}>

      <Text style={{ fontSize:24, textAlign:'center' }}>
        Sode Mutt Login
      </Text>

      <TextInput
        placeholder="+91XXXXXXXXXX"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        style={{ borderWidth:1, marginVertical:10, padding:10 }}
      />

      <Button title="Send OTP" onPress={sendOTP} />

      {confirm && (
        <>
          <TextInput
            placeholder="Enter OTP"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
            style={{ borderWidth:1, marginVertical:10, padding:10 }}
          />

          <Button title="Verify OTP" onPress={verifyOTP} />
        </>
      )}

    </View>
  );
}
