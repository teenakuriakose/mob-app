import React from 'react';
import * as Routes from './routes';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../features/Dashboard/Dashboard';
import SignIn from '../features/SignIn/SignIn';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={Routes.ROUTE_SIGN_IN}>
      <Stack.Screen name={Routes.ROUTE_SIGN_IN} component={SignIn} />
      <Stack.Screen name={Routes.ROUTE_DASHBOARD} component={Dashboard} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
