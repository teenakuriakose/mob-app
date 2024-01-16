import {createStore, applyMiddleware} from 'redux';
// import createSagaMiddleware from 'redux-saga';

// import {composeWithDevTools} from 'redux-devtools-extension';
// import logger from 'redux-logger';

import {rootReducer} from './reducer';
// import rootSaga from './saga';

// const sagaMiddleware = createSagaMiddleware();
// const composedMiddlewares = composeWithDevTools(
//   applyMiddleware(sagaMiddleware, logger),
// );

const store = createStore(rootReducer);

// sagaMiddleware.run(rootSaga);

export default store;
