import {createStore, applyMiddleware} from 'redux';
// import createSagaMiddleware from 'redux-saga';

// import {composeWithDevTools} from 'redux-devtools-extension';
// import logger from 'redux-logger';

import {rootReducer} from './reducer';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
// import rootSaga from './saga';

// const sagaMiddleware = createSagaMiddleware();
// const composedMiddlewares = composeWithDevTools(
//   applyMiddleware(sagaMiddleware, logger),
// );

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['languageSelection', 'countrySelection'],
  // // Blacklist (Don't Save Specific Reducers)
  // blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);


// sagaMiddleware.run(rootSaga);

export default store;
