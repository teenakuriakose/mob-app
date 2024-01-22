import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './reducer';
import rootSaga from './saga';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['languageSelection', 'countrySelection'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);
export const persistor = persistStore(store);

export default store;

sagaMiddleware.run(rootSaga);
