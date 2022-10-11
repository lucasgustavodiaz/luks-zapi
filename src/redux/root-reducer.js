import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import productsReducer from './products/products-reducer'
import cartReducer from './cart/cart-reducer'
import categoriesReducer from './categories/categories-reducer'
import userReducer from './user/user-reducer'
import ordersReducer from './orders/order-reducer'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  categories: categoriesReducer,
  user: userReducer,
  orders: ordersReducer
})

export default persistReducer(persistConfig, rootReducer)
