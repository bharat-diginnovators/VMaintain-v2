import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SidebarProvider } from './utils/context.jsx'
import {
  BrowserRouter,
 
} from "react-router-dom";
import store from './Store/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <SidebarProvider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </SidebarProvider>
    </Provider>
   
    
  </React.StrictMode>,
)
