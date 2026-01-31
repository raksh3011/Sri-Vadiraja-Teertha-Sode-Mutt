import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { auth } from '../config/firebase';
import {
  signInWithPhoneNumber,
  RecaptchaVerifier
} from 'firebase/auth';

export default function Login() {

  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [confirm, setConfirm] = useState<any>(null);

  const sendOTP = async () => {
    const verifier = new RecaptchaVerifier(auth, 'recaptcha', {
      size: 'invisible'
    });

    const res = await signInWithPhoneNumber(auth, phone, verifier);
    setConfirm(res);
  };

  const verify = async () => {
    await confirm.confirm(code);
  };

  return (
    <View>
      <Text>Login</Text>

      <TextInput
        placeholder="+91XXXXXXXXXX"
        onChangeText={setPhone}
      />

      <Button title="Send OTP" onPress={sendOTP} />

      <TextInput
        placeholder="OTP"
        onChangeText={setCode}
      />

      <Button title="Verify" onPress={verify} />

      <View id="recaptcha"></View>
    </View>
  );
}
