import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, SET_TOTAL, IProductItem, RootState } from '../redux/types';
import { products } from '../constants/products'
import { View } from '../components/Themed';
import { Card, Button, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default function TabOneScreen() {
  const cartItems = useSelector((state: RootState)  => state.totalCartItems)

  const dispatch = useDispatch()
  const addItemToCart = (item: IProductItem) => {
    dispatch({ type: ADD_TO_CART, payload: item })
    dispatch({ type: SET_TOTAL })
  }

  return (
    <View>
      <Text style={{color:'#ffffff', fontSize: 20}}># of products in the cart: {cartItems}</Text>
      <ScrollView>
      {
        products.map((item: IProductItem, index: number) => {
          return (
            <Card key={index} >
              <Card.Title>{item.name}</Card.Title>
              <Text>Price: $ {item.price}</Text>
              <Button
                title="Add to Cart"
                onPress={() => addItemToCart(item)}
              />
            </Card>
          );
        })
      }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
