import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/portfoliowebsite">
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


