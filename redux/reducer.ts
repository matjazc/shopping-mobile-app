export const ADD_TO_CART: string = 'ADD_TO_CART'
export const REMOVE_FROM_CART: string = 'REMOVE_FROM_CART'
export const SET_TOTAL: string = 'SET_TOTAL'

const initialState = {
  totalPrice: 0,
  totalCartItems: 0,
  cartItems:[]
}

const reducer = (state = initialState, action: any) => { 
  switch (action.type) {
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
    case SET_TOTAL:
  }
  return state
}

export default reducer