import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from '../../utils/axios';
import paramsSearch from '../../utils/paramsSearch';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    const params = Object.assign(paramsSearch(), { limit: 20, offset: 0 })
    console.log(params)
    axios.get('/comics', { params })
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