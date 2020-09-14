import { ICartItem } from "../redux/types";

export const isProductAlreadyInCart = (cart: Array<ICartItem>, name: string) => {
  return findProductIndex(cart, name) >= 0;
}

export const findProductIndex = (cart: Array<ICartItem>, name: string) => {
  return cart.findIndex((product) => product.name === name);
};

export const isMoreThanOneProductInCart = (cart: Array<ICartItem>, index: number) => {
  return cart[index].units > 1;
}

export const updateProduct = (cart: Array<ICartItem>, index: number, counterUpdate: number) => {
  let cartItems = [...cart];
  const existingProduct = cartItems[index]; 

  const updatedProductData = {
    ...existingProduct,
    units: existingProduct.units + counterUpdate
  };

  cartItems[index] = updatedProductData; 
  return cartItems;
};

export const total = (cart: Array<ICartItem>) => {
  const calculateTotalPrice = (accumulator: number, item: ICartItem) => accumulator + item.units * item.price;
  const totalCartItems = (accumulator: number, item: ICartItem) => accumulator + item.units;
  return {
      totalPrice: cart.reduce(calculateTotalPrice, 0),
      totalCartItems: cart.reduce(totalCartItems, 0)
  }
}

export const limitDecimal = (number: number) => Number.parseFloat(number.toString()).toFixed(2);