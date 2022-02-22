
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const CartItems = (props) => {
  console.log(props)
  const { comics } = props
  const comicsQuantity = () => comics && comics.length ? comics.length : 0

  return (
    <View style={styles.box}>
      <Icon name="shopping-cart" size={30}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{ comicsQuantity() }</Text>
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

const mapStateToProps = (state, props) => {
  return { comics: state.comics };
}
export default connect(mapStateToProps)(CartItems);
