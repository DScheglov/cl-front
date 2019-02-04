import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store, * as Store from './store';
import * as Modal from './modal-common/init';


const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export const init = () => {
  Modal.init();
  Store.init();
};
export default AppWithStore;
