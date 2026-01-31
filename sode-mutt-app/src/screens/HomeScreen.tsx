import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import colors from '../theme/colors';

export default function Home() {

  return (
    <ScrollView style={{ backgroundColor: colors.bg }}>

      <Image
        source={require('../assets/images/logo.png')}
        style={{ height:120, width:120, alignSelf:'center' }}
      />

      <Text style={{ textAlign:'center', fontSize:22 }}>
        Sode Sri Vadiraja Matha
      </Text>

      <View>
        <Text>Darshana: 5:00 AM – 8:30 AM</Text>
        <Text>Prasada: 11:30 AM</Text>
      </View>

      <View>
        <Text>Announcements</Text>
      </View>

    </ScrollView>
  );
}
