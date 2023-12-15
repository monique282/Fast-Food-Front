import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Reset from './assets/Styles/Reset.js'
import GlobalStyle from './assets/Styles/GlobalStyles.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)