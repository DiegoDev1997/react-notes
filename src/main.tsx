import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ContextProvider } from './context/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
 <ContextProvider>
   <Router>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
 </ContextProvider>
)
