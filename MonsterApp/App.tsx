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
import state from './src/state';
import Setup from './src/setup/Setup';

const App: () => Node = () => {
  return (
    <Provider store={state}>
      <Setup />
    </Provider>
  );
};

export default App;
