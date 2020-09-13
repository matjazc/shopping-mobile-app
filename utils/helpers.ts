import { ICartItem, IProductItem } from "../redux/types";

export const isProductAlreadyInCart = (cart: Array<ICartItem>, name: string) => {
  return findProductIndex(cart, name) >= 0 
}

export const findProductIndex = (cart: Array<ICartItem>, name: string) => {
  return cart.findIndex((product) => product.name === name);
};

export const updateProduct = (cart: Array<ICartItem>, product: IProductItem) => {
  let cartItems = [...cart];
  const productIndex = findProductIndex(cart, product.name)
  const existingProduct = cartItems[productIndex]; 

  const updatedProductData = {
    ...existingProduct,
    units: ++existingProduct.units
  };

  cartItems[productIndex] = updatedProductData; 
  return cartItems;
};

export const limitDecimal = (number: number) => Number.parseFloat(number.toString()).toFixed(2);