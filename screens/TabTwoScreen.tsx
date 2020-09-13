import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { limitDecimal } from '../utils/helpers';
import { RootState, ICartItem } from '../redux/types';

export default function TabTwoScreen() {
  const cartItems = useSelector((state: RootState) => state.cartItems)
  // const totalPrice = useSelector(state => state.totalPrice)

  return (
    <View>
      {cartItems.length !== 0 ? (
        <View>
        {/* <Text style={{color:'#000000', fontSize: 20}}>OVERALL TOTAL: {limitDecimal(totalPrice)} $</Text> */}
    <ScrollView>
    {
      cartItems.map((item: ICartItem, index: number) => { 
        return (
          <Card key={index} >
            <Card.Title>{item.name}</Card.Title>
            <Text>Price: $ {item.price}</Text> 
            <Text>Quantity: {item.units}</Text>
            <Text>Total: $ {limitDecimal(item.units * item.price)}</Text> 
          </Card>
        );
      })
    }
    </ScrollView>
    </View>
      ) : (
        <View>
          <Text style={{color:'#000000', fontSize: 20}}>Your cart is empty :'(</Text>
        </View>
      )}
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
