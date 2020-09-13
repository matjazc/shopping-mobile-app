import * as React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { ScrollView } from "react-native-gesture-handler";
import { Card, Button, Text } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { limitDecimal } from "../utils/helpers";
import {
  REMOVE_FROM_CART,
  SET_TOTAL,
  RootState,
  ICartItem,
} from "../redux/types";

export default function TabTwoScreen() {
  const cartItems = useSelector((state: RootState) => state.cartItems);
  const totalPrice = useSelector((state: RootState) => state.totalPrice);
  const dispatch = useDispatch();

  const removeItemFromCart = function (item: ICartItem, index: number) {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: { ...item, index },
    });
    dispatch({
      type: SET_TOTAL,
    });
  };

  return (
    <View>
      {cartItems.length !== 0 ? (
        <View>
          <Text style={styles.cartProducts}>
            Overall total: $ {limitDecimal(totalPrice)}
          </Text>
          <ScrollView>
            {cartItems.map((item: ICartItem, index: number) => {
              return (
                <Card key={index}>
                  <Card.Title>{item.name}</Card.Title>
                  <Text>Price: $ {item.price}</Text>
                  <Text>Quantity: {item.units}</Text>
                  <Text>Total: $ {limitDecimal(item.units * item.price)}</Text>
                  <Button
                    title="Remove item"
                    onPress={() => removeItemFromCart(item, index)}
                  />
                </Card>
              );
            })}
          </ScrollView>
        </View>
      ) : (
        <View>
          <Text style={{ color: "#000000", fontSize: 20 }}>
            Your cart is empty :'(
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cartProducts: {
    color: "green",
    fontSize: 20,
  },
});
