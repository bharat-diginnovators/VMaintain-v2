import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SidebarProvider } from './utils/context.jsx'
import {
  BrowserRouter,
 
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SidebarProvider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </SidebarProvider>
    
  </React.StrictMode>,
)
