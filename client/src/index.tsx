import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './store/index'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>

      <App />

    </BrowserRouter>
  </Provider>
);

