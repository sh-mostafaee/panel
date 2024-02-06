import { combineReducers, createStore } from 'redux';
import { authReducer } from '@shiva/redux/modules/auth';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { counterReducer } from '@shiva/redux/modules/counter';
import { promoReducer } from '@shiva/redux/modules/poromo';
import { productsReducer } from '@shiva/redux/modules/products';

const persistConfig = {
  key: 'shiva-test',
  storage,
};

const reducers = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  promo: promoReducer,
  products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
