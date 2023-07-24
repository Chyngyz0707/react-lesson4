import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NameForm from './App';
import KeyForm from './form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <KeyForm />
    <NameForm />
  </React.StrictMode>
);

