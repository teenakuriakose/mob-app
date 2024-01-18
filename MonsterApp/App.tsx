/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import state, {persistor} from './src/state';
import Setup from './src/setup/Setup';
import {PersistGate} from 'redux-persist/integration/react';

const App: () => Node = () => {
  return (
    <Provider store={state}>
      <PersistGate loading={null} persistor={persistor}>
        <Setup />
      </PersistGate>
    </Provider>
  );
};

export default App;
