import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/store';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {
  makeClient
} from './client';
import {
  AppProvider
} from './components/AppContext';

import './index.scss';

// make a client to use the tvmaze api
const client = makeClient();

ReactDOM.render(
  <Provider store={configureStore({} , client)}>
    <AppProvider client={client}>
      <App/>
    </AppProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
