
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CartItems = () => {
  const [hqDetail, setHqDetail] = useState(2);

  return (
    <View style={styles.box}>
      <Icon name="shopping-cart" size={30}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>2</Text>
        </View>
      </Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 10
  },
  badge: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 0,
    right: 5,
    backgroundColor: '#3483fa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%'
  },
  badgeText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '700'
  }                                                            
});

export default CartItems
