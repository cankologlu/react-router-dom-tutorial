import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/root.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>
  },
  {
    path:"/about",
    element: <p>this page aboot</p>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
