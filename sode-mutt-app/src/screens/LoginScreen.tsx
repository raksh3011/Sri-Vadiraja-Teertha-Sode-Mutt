import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

import {
  FirebaseRecaptchaVerifierModal
} from 'expo-firebase-recaptcha';

import {
  PhoneAuthProvider,
  signInWithCredential
} from 'firebase/auth';

import { auth } from '../config/firebase';

export default function LoginScreen() {

  const recaptchaVerifier = useRef<any>(null);

  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState<string | null>(null);

  // Send OTP
  const sendOTP = async () => {
    try {
      const provider = new PhoneAuthProvider(auth);

      const id = await provider.verifyPhoneNumber(
        phone,
        recaptchaVerifier.current
      );

      setVerificationId(id);
      Alert.alert('OTP Sent');

    } catch (e: any) {
      Alert.alert('Error', e.message);
    }
  };

  // Verify OTP
  const verifyOTP = async () => {
    try {
      if (!verificationId) return;

      const credential = PhoneAuthProvider.credential(
        verificationId,
        otp
      );

      await signInWithCredential(auth, credential);

    } catch {
      Alert.alert('Invalid OTP');
    }
  };

  return (
    <View style={{ padding: 20 }}>

      {/* Recaptcha */}
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={auth.app.options}
      />

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

      {verificationId && (
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
