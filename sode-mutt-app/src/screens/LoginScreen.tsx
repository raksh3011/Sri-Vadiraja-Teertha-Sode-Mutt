import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

import {
  PhoneAuthProvider,
  signInWithCredential,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from 'firebase/auth';

import { auth } from '../config/firebase';

export default function LoginScreen() {

  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmation, setConfirmation] = useState<any>(null);

  useEffect(() => {
    if (!global.recaptchaVerifier) {
      global.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        'recaptcha-container',
        {
          size: 'invisible',
        }
      );
    }
  }, []);

  // Send OTP
  const sendOTP = async () => {
    try {
      const result = await signInWithPhoneNumber(
        auth,
        phone,
        global.recaptchaVerifier
      );

      setConfirmation(result);
      Alert.alert('OTP Sent');

    } catch (e: any) {
      Alert.alert('Error', e.message);
    }
  };

  // Verify OTP
  const verifyOTP = async () => {
    try {
      await confirmation.confirm(otp);
    } catch {
      Alert.alert('Invalid OTP');
    }
  };

  return (
    <View style={{ padding: 20 }}>

      {/* Required for Recaptcha */}
      <View id="recaptcha-container" />

      <Text style={{ fontSize: 24, textAlign: 'center' }}>
        Sode Mutt Login
      </Text>

      <TextInput
        placeholder="+91XXXXXXXXXX"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />

      <Button title="Send OTP" onPress={sendOTP} />

      {confirmation && (
        <>
          <TextInput
            placeholder="Enter OTP"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
            style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
          />

          <Button title="Verify OTP" onPress={verifyOTP} />
        </>
      )}

    </View>
  );
}
