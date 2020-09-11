export const ADD_TO_CART: string = 'ADD_TO_CART'
export const REMOVE_FROM_CART: string = 'REMOVE_FROM_CART'
export const SET_TOTAL: string = 'SET_TOTAL'

export interface RootState {
  totalCartItems: number
}

export interface InitialState {
  totalPrice: number
  totalCartItems: number
  cartItems: Array<string>
}

export interface IProductItem {
  name: string
  price: number
}

export interface IAddToCartAction {
  type: typeof ADD_TO_CART;
  payload: IProductItem
}

export interface IRemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: {
    item: object
    index: number
  }
}

export interface ISetTotal {
  type: typeof SET_TOTAL;
}

export type ActionTypes = IAddToCartAction | IRemoveFromCartAction | ISetTotal;
