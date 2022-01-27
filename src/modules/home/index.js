import React, { useState, useEffect } from 'react';
import { FlatList, View, ScrollView, Button, Text, StyleSheet } from 'react-native';
import CardImages from '../../components/cardImages';
import axios from '../../utils/axios';
import paramsSearch from '../../utils/paramsSearch';

const HomeScreen = ({ navigation }) => {
  const [hqArray, setHqArray] = useState([]);
  const renderItem = ({ item }) => (
    <CardImages item={item} key={item.id} />
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
      <View>
        <Text style={styles.title}>Quadrinhos</Text>
      </View>
      <View style={ styles.divider }>
        <View style={ styles.dividerLine }></View>
      </View>
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
  title: {
    padding: 7,
    fontWeight: 700,
    fontSize: 28,
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  dividerLine: {
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    borderColor: '#757575',
    height: 5,
    width: '95%'
  }
});

export default HomeScreen
