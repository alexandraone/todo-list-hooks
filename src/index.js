import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

const persistedState = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : {};

const store = createStore(reducers, persistedState);

store.subscribe(() => {
  localStorage.setItem('todos', JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
