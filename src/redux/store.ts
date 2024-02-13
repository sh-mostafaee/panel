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

const persistedReducer = persistReducer(persistConfig, reducers as any);
const normalStore = createStore(reducers);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof normalStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof normalStore.dispatch;
