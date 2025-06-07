import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProvedorTema } from './contexto/ContextoTema';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProvedorTema>
      <App />
    </ProvedorTema>
  </React.StrictMode>
);