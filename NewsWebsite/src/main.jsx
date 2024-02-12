import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  './components/header/Header.jsx'
import './components/home/Home.jsx'
import './components/home/Home.css'
import './components/footer/Footer.jsx'
import './components/footer/Footer.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
