import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from '../../utils/axios';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    axios.get(`/comics`)
      .then(({ data: { data: { results } } }) => {
        console.log(results)
      })
  }, [])
  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen