import React, { useState, useEffect } from 'react';
import { FlatList, View, ScrollView, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardImages from '../../components/cardImages';
import axios from '../../utils/axios';
import paramsSearch from '../../utils/paramsSearch';

const HomeScreen = ({ navigation }) => {
  const [hqArray, setHqArray] = useState([]);
  const renderItem = ({ item }) => (
    <TouchableHighlight style={styles.touchableCard} key={item.id} onPress={() => navigation.navigate('Details', { id: item.id })}>
      <CardImages item={item} key={item.id} />
    </TouchableHighlight>
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
      <View style={styles.pageTitle}>
        <Icon name="book" size={30} />
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
  touchableCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
    width: '45%',
    height: 250,
    elevation: 50
  },                                                               
  title: {
    padding: 7,
    fontWeight: '700',
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
  },
  pageTitle: {
    display: 'block',
    padding: 10
  }
});

export default HomeScreen
