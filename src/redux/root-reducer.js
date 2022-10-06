import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import productsReducer from './products/products-reducer'
import cartReducer from './cart/cart-reducer'
import categoriesReducer from './categories/categories-reducer'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  categories: categoriesReducer
})

export default persistReducer(persistConfig, rootReducer)
