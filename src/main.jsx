import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 🔥 IMPORTANTE: usar HashRouter no GitHub Pages
import { HashRouter } from 'react-router-dom'

// (opcional) estilos globais
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)