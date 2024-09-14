import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store/store'; // Import the store
import { Provider } from 'react-redux'; // Import Provider
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>
);