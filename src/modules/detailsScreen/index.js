import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    <View style={styles.screen}>
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>{ formatTitle(hqDetail.title) }</Text>
          <Icon name="heart" size={26} color="#999" />
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
        <View style={ styles.divider }>
          <View style={ styles.dividerLine }></View>
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
      </View>
      <View style={styles.cardActions}>
        <Button
          title="Adicionar ao carrinho"
          color="#3483fa"
        >
          <Icon name="home" size={18} color="#999" />
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    alignContent: 'center'
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    maxHeight: '95%',
    backgroundColor: '#fff'
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
  screen: {
    width: '100%',
    height: '100%',
    padding: '5%',
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
  divider: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  dividerLine: {
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    borderColor: 'rgba(0,0,0,.1)',
    height: 5,
    width: '95%'
  },
});

export default DetailsScreen
