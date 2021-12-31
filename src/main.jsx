import React,{Suspense} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<span>loading</span>}>
            <App />
        </Suspense>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
