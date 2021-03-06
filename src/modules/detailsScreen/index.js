import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import axios from '../../utils/axios';
import paramsSearch from '../../utils/paramsSearch';

const DetailsScreen = ({ route }) => {
  const { id } = route.params
  const [hqDetail, setHqDetail] = useState({});
  const formatUrl = (imageUrl, extension) => `${imageUrl}.${extension}`
  const formartPrice = (price) => price?.length ? price[0].price.toFixed(2) : 0
  const formatTitle = (text) => text
  

  useEffect(() => {
    const params = paramsSearch()

    axios.get(`/comics/${id}`, { params })
      .then(({ data: { data: { results } } }) => {
        console.log(results)
        setHqDetail(results[0])
      })
  }, [])

  return (
    <View style={styles.box}>
      <View>
        <Text style={styles.title}>{ formatTitle(hqDetail.title) }</Text>
      </View>
      <View style={styles.cardImage}>
        {hqDetail.images && hqDetail.images.length > 0 ?
          <Image
            style={styles.image}
            source={{
              uri: formatUrl(hqDetail.images[0].path, hqDetail.images[0].extension),
            }}
          /> :
          <View style={styles.cardNoImage}>
            <Text style={styles.title}>Sem imagens</Text>
          </View>
        }
      </View>
      <View style={styles.cardText}>
        <View>
          <Text style={styles.priceText}>${ formartPrice(hqDetail.prices) }</Text>
        </View>
        <View>
          <Text style={styles.details}><Text style={styles.detailName}>Descricao:</Text> { hqDetail.description }</Text>
        </View>
        <View>
          <Text style={styles.details}><Text style={styles.detailName}>Paginas:</Text> { hqDetail.pageCount }</Text>
        </View>
      </View>
      <View style={styles.cardActions}>
        <Button
          title="Adicionar ao carrinho"
          color="#841584"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    justifyContent: 'center'
  },
  card: {
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
  cardImage: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    height: 350,
    width: '100%'
  },
  cardNoImage: {
    height: 300,
    width: 200,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9E9E9E'
  },
  cardText: {
    height: 70,
    width: '100%',
  },
  cardActions: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    alignContent: 'center',
    bottom: 0,
    left: 0
  },
  box: {
    width: '100%',
    height: '100%',
    padding: '5%'
  },                                                                                 
  title: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'justify'
  },
  priceText: {
    fontSize: 30,
    fontWeight: '700'
  },
  description: {
    fontSize: 15,
    textAlign: 'justify'
  },
  detailName: {
    fontWeight: '700'
  },
  image: {
    resizeMode: 'contain',
    height: 300,
    width: '100%'
  },
});

export default DetailsScreen
