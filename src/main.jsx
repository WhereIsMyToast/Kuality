import React from 'react'
import ReactDOM from 'react-dom/client'
import Inicio from './Inicio.jsx'
import './index.css'
import Unete from './Unete.jsx'
import Creadores from './Creadores.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />
  },
  {
    path: "/creadores",
    element: <Creadores />
  },
  {
    path: "/unete",
    element: <Unete />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
