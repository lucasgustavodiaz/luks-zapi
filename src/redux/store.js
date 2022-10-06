import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'

const initialState = {}

export const store = configureStore({ reducer: rootReducer, middleware: [thunk], preloadedState: initialState })

export const persistor = persistStore(store)
