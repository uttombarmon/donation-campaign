import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Donations from './components/Donations/Donations.jsx'
import Details from './components/Details/Details.jsx'
import Chart from './components/Chart/Chart.jsx'
import ErrorPage from './Error.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage/> ,
    children:[
      {
        path:"",
        element: <Home/>,
        loader:()=> fetch("data.json")
      },
      {
        path:"donation",
        element: <Donations/>
      },
      {
        path:"statistics",
        element: <Chart/>,
        loader:()=> fetch("data.json")
      },
      {
        path:"/:id",
        element:<Details/>,
        loader:()=> fetch("data.json")
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
