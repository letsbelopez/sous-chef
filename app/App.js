import React from 'react';
import { Provider } from 'react-redux';
import { AppProvider } from '@shopify/polaris';

import Router from './components/Router';
import store from '../client/store';

export default function() {
  return (
    <Provider store={store}>
      <AppProvider>
        <Router />
      </AppProvider>
    </Provider>
  );
}
