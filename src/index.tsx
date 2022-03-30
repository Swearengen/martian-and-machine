import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import { AuthProvider } from 'providers/AuthProvider';
import 'index.css';
import { ToastProvider } from 'providers/ToastProvider';
import { StateProvider } from 'store/store';

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <AuthProvider>
        <BrowserRouter>
          <StateProvider>
            <App />
          </StateProvider>
        </BrowserRouter>
      </AuthProvider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
