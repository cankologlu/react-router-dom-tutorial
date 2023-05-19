import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/root.jsx'
import ErrorPage from './components/error-page.jsx'
import { element } from 'prop-types'
import Contact from './routes/contact.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    errorElement: <ErrorPage/>
  },
  {
    path:"/about",
    element: <p>this page aboot</p>
  },
  {
    path:"contacts/:contactId",
    element: <Contact/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
