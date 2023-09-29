import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CounterContextprovider } from './context/CounterContext.jsx';
import { TitleColorContextProvider } from './context/TitleColor.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextprovider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CounterContextprovider>
  </React.StrictMode>,
);
