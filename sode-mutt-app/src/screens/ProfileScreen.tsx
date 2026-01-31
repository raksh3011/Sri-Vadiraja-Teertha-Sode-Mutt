import React, { useEffect, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { auth } from '../config/firebase';
import { saveProfile, getProfile } from '../services/firestore';

export default function Profile() {

  const [name,setName]=useState('');
  const uid = auth.currentUser?.uid!;

  useEffect(()=>{
    load();
  },[]);

  const load = async ()=>{
    const data:any = await getProfile(uid);
    if(data) setName(data.name);
  };

  const save = async ()=>{
    await saveProfile(uid,{name});
    alert("Saved");
  };

  return (
    <View>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <Button title="Save" onPress={save} />

    </View>
  );
}
