import React from 'react'
import App from './App.jsx'
import AddCard from './AddCard.jsx';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
  },
  {
    path:'/card',
    element:<AddCard />,
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
