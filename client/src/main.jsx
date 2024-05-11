import React from 'react'
import Landing from './pages/Landing'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import Student from './pages/Student';
import Teacher from './pages/Teacher';
import Admin from './pages/Admin';
import ErrorPage from './pages/Error';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/student",
    element:<Student/>
  },
  {
    path:"/teacher",
    element:<Teacher/>
  },
  {
    path:"/admin",
    element:<Admin/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>

)
