import { InitialState, ActionTypes, ADD_TO_CART, REMOVE_FROM_CART, SET_TOTAL } from './types'

const initialState: InitialState = {
  totalPrice: 0,
  totalCartItems: 0,
  cartItems: []
}

const reducer = (state = initialState, action: ActionTypes) => { 
  switch (action.type) {
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
    case SET_TOTAL:
  }
  return state
}

export default reducer