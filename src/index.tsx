import React from 'react';
import ReactDOM from 'react-dom/client';
import  StrictMode from 'react';

import App from './App';
 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

