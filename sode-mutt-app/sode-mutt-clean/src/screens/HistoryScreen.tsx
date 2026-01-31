[
  {
    "id":1,
    "name":"Sri Vishnu Teertharu",
    "year":"1500-1520",
    "desc":"Founder"
  },
  {
    "id":2,
    "name":"Sri Vadiraja Teertha",
    "year":"1520-1600",
    "desc":"Great scholar"
  }
]
import React from 'react';
import { FlatList, View, Text } from 'react-native';
import data from '../data/history.json';

export default function History() {

  return (
    <FlatList
      data={data}
      keyExtractor={(i)=>i.id.toString()}
      renderItem={({item})=>(
        <View>
          <Text>{item.name}</Text>
          <Text>{item.year}</Text>
          <Text>{item.desc}</Text>
        </View>
      )}
    />
  );
}
