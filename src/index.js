import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

const appNode = document.getElementById('root');
const appRoot = ReactDOM.createRoot(appNode);

appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
