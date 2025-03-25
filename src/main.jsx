import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import './index.css'
import App from './App.jsx'

emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/junsookim">
      <App />
    </BrowserRouter>
  </StrictMode>,
)