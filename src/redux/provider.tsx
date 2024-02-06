'use client';

import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@shiva/redux/store';

export type ReduxProviderProps = {
  children: ReactNode;
};

export function ReduxProvider(props: ReduxProviderProps) {
  const { children } = props;
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
