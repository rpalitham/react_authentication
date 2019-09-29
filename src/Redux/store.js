import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import rootReducer from "./reducers"

const initialState = {}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [thunk, createLogger()]

export const store = createStore(persistedReducer, initialState, applyMiddleware(...middleware))

export let persistor = persistStore(store)