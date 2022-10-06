import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from './cart-actions'
import { addItemToCart, removeItemsToCart } from './cart-utils'

const INITIAL_STATE = {
  show: false,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        show: !state.show
      }
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemsToCart(state.cartItems, action.payload)
      }
    case CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }
    default:
      return state
  }
}

export default cartReducer
