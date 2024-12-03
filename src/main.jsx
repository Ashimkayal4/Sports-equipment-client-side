import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx';
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import AddEquipment from './Components/AddEquipment.jsx';
import AllSports from './Components/AllSports.jsx';
import MyEquipmentList from './Components/MyEquipmentList.jsx';
import Login from './Authentication/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/allSports',
        element:<AllSports></AllSports>
      },
      {
        path: '/addEquipment',
        element:<AddEquipment></AddEquipment>
      },
      {
        path: '/myEquipmentList',
        element:<MyEquipmentList></MyEquipmentList>
      },
      {
        path: '/login',
        element:<Login></Login>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
