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
import Register from './Authentication/Register.jsx';
import Private from './Components/Private.jsx';
import Details from './Home-component/Details.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/equipments/home')
      },
      {
        path: '/allSports',
        element: <AllSports></AllSports>,
        loader: () => fetch('http://localhost:5000/equipments')
      },
      {
        path: '/addEquipment',
        element: <Private><AddEquipment></AddEquipment></Private>
      },
      {
        path: '/myEquipmentList',
        element: <Private><MyEquipmentList></MyEquipmentList></Private>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/details/:id',
        element: <Private><Details></Details></Private>,
        loader: () => fetch('http://localhost:5000/equipments')
      },
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
