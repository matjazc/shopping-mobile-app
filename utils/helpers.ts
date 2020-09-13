import { ICartItem } from "../redux/types";

export const isProductAlreadyInCart = (cart: Array<ICartItem>, name: string) => {
  return findProductIndex(cart, name) >= 0 
}

export const findProductIndex = (cart: Array<ICartItem>, name: string) => {
  return cart.findIndex((product) => product.name === name);
};

export const isMoreThanOneProductInCart = (cart: Array<ICartItem>, index: number) => {
  return cart[index].units > 1
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

export const limitDecimal = (number: number) => Number.parseFloat(number.toString()).toFixed(2);