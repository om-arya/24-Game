import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './menu/menu.css';
import './about/about.css';
import './play/card/card.css';
import './play/math-input/math-input.css';
import './play/sidebar/sidebar.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);