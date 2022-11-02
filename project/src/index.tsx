import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const OFFERS_COUNT = 6;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offersCount={OFFERS_COUNT}/>
  </React.StrictMode>
);
