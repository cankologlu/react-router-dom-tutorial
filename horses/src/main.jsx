import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root, { loader as rootLoader } from './routes/root.jsx'
import ErrorPage from './components/error-page.jsx'
import Contact from './routes/contact.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    children: [
      {
        path:"contacts/:contactid",
        element: <Contact />
      }
    ]
  },
  {
    path:"/about",
    element: <p>this page aboot</p>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
