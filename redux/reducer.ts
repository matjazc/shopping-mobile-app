import {
  InitialState,
  ActionTypes,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_TOTAL,
} from './types';
import { updateProduct, isProductAlreadyInCart } from '../utils/helpers';

const initialState: InitialState = {
  totalPrice: 0,
  totalCartItems: 0,
  cartItems: [],
};

const reducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: isProductAlreadyInCart(state.cartItems, action.payload.name)
          ? updateProduct(state.cartItems, action.payload)
          : [...state.cartItems, { ...action.payload, units: 1 }],
      };

    case REMOVE_FROM_CART:
    case SET_TOTAL:
  }
  return state;
};

export default reducer;
