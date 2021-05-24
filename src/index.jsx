import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';

import './styles/globals.css'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

