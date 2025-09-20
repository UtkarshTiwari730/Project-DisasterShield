import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initGA } from './analytics.js'

// Initialize Google Analytics (replace with your actual GA4 Measurement ID)
initGA('G-XXXXXXXXXX');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
