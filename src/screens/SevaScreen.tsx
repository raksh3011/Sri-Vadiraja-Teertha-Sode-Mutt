import React from 'react';
import { View, Button, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { saveSeva } from '../services/firestore';

export default function Seva() {

  const { control, handleSubmit } = useForm();

  const submit = async (data:any) => {
    await saveSeva(data);
    alert("Seva Booked Successfully");
  };

  return (
    <View>

      <Controller
        control={control}
        name="name"
        render={({field:{onChange,value}})=>(
          <TextInput
            placeholder="Name"
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="mobile"
        render={({field:{onChange,value}})=>(
          <TextInput
            placeholder="Mobile"
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="date"
        render={({field:{onChange,value}})=>(
          <TextInput
            placeholder="Date"
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Button title="Submit" onPress={handleSubmit(submit)} />

    </View>
  );
}
