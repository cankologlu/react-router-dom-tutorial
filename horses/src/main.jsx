import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root, { loader as rootLoader, action as rootAction } from './routes/root.jsx'
import ErrorPage from './components/error-page.jsx'
import Contact, { loader as contactLoader } from './routes/contact.jsx'
import EditContact from './routes/edit'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path:"contacts/:contactId",
        element: <Contact />,
        loader: contactLoader
      },
      {
        path:"contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader
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
