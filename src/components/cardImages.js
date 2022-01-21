import { View, Text, StyleSheet, Image } from 'react-native';

const CardImages = ({ navigation }, props) => {
  return (
    <View style={styles.item}>
      <View style={styles.imageBox}>
        {props.images.length > 0 ?
          <Image
            style={styles.tinyLogo}
            source={{
              uri: `${props.images[0].path}.${props.images[0].extension}`,
            }}
          /> :
          <Text style={styles.title}>Sem imagens</Text>
        }
      </View>
      <Text style={styles.title}>{ props.title }</Text>
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
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
    width: '45%',
    height: 200,
    elevation: 20
  },                                                                                         
  title: {
    fontSize: 12,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});


export default CardImages