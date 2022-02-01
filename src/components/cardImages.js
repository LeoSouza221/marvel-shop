import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CardImages = (props) => {
  const { item } = props
  const formatUrl = (imageUrl, extension) => `${imageUrl}.${extension}`
  const formartPrice = (price) => price.toFixed(2)
  const formatTitle = (text) => text.length > 25 ? `${text.substring(0,30)}...` : text

  return (
    <React.Fragment>
      <View style={styles.cardImage}>
        {item.images.length > 0 ?
          <Image
            style={styles.image}
            source={{
              uri: formatUrl(item.images[0].path, item.images[0].extension),
            }}
          /> :
          <View style={styles.cardNoImage}>
            <Text style={styles.title}>Sem imagens</Text>
          </View>
        }
      </View>
      <View style={styles.cardText}>
        <View>
          <Text style={styles.priceText}>${ formartPrice(item.prices[0].price) }</Text>
        </View>
        <View>
          <Text style={styles.title}>{ formatTitle(item.title) }</Text>
        </View>
      </View>
    </React.Fragment>
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
    height: 180,
    width: '100%'
  },
  cardNoImage: {
    height: 150,
    width: 100,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9E9E9E'
  },
  cardText: {
    height: 70,
    width: '100%'
  },                                                                                 
  title: {
    fontSize: 12,
    fontWeight: 500
  },
  priceText: {
    fontSize: 22,
    fontWeight: 700
  },
  image: {
    resizeMode: 'contain',
    height: 150,
    width: '100%'
  },
});


export default CardImages
