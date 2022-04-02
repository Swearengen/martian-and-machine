import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import { AuthProvider } from 'providers/AuthProvider';
import 'index.css';
import { ToastProvider } from 'providers/ToastProvider';
import { StateProvider } from 'store/store';
import { HttpClientProvider } from 'providers/HttpClientProvider';

ReactDOM.render(
  <StrictMode>
    <ToastProvider>
      <AuthProvider>
        <HttpClientProvider>
          <BrowserRouter>
            <StateProvider>
              <App />
            </StateProvider>
          </BrowserRouter>
        </HttpClientProvider>
      </AuthProvider>
    </ToastProvider>
  </StrictMode>,
  document.getElementById('root'),
);
