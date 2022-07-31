import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from "./slices/CurrencySlice";
import { Provider } from 'react-redux';

const store = configureStore(
  {
    reducer: {
      currency: currencyReducer
    }
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);