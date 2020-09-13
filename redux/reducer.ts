import {
  InitialState,
  ActionTypes,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_TOTAL,
} from "./types";
import {
  updateProduct,
  isProductAlreadyInCart,
  isMoreThanOneProductInCart,
  findProductIndex,
  totalPrice,
  totalCartItems,
} from "../utils/helpers";

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
          ? updateProduct(state.cartItems, findProductIndex(state.cartItems, action.payload.name), 1)
          : [...state.cartItems, { ...action.payload, units: 1 }]
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: isMoreThanOneProductInCart(state.cartItems, action.payload.index)
          ? updateProduct(state.cartItems, action.payload.index, -1)
          : [...state.cartItems.filter(item => item.name !== action.payload.name)]
      };
    case SET_TOTAL:
      return {...state, 
        totalPrice: totalPrice(state.cartItems),
        totalCartItems: totalCartItems(state.cartItems)
      };
    default:
      return state;
  }
};

export default reducer;
