import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import axios from '../../utils/axios';
import paramsSearch from '../../utils/paramsSearch';

const HomeScreen = ({ navigation }) => {
  const [hqArray, setHqArray] = useState([]);
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{ item.title }</Text>
    </View>
  );
  useEffect(() => {
    const params = Object.assign(paramsSearch(), { limit: 20, offset: 0 })
    console.log(params)
    axios.get('/comics', { params })
      .then(({ data: { data: { results } } }) => {
        console.log(results)
        setHqArray(results)
      })
  }, [])
  

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          numColumns = {2}
          data={hqArray}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        >
        </FlatList>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    justifyContent: 'center'
  },
  item: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
    justifyContent: 'center',
    width: '45%',
    height: 200,
    elevation: 20
  },
  title: {
    fontSize: 12,
  },
});


export default HomeScreen