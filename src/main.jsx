import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
    children:[

      {
        path: "/user",
        element: <div>Hello bro, i am a pagla user</div>

      },

      {
        path: "/about",
        element: <div>Hello world! i am from about page </div>,
      },
    
      {
        path: "/contact",
        element: <div>Hello world! i am from contact  page. call me now  </div>,
      },

    ]


  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
