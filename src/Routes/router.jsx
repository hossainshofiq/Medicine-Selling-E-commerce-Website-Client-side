import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import PrivateRoute from './PrivateRoute';
import Secret from '../Pages/Shared/Secret';
import Shop from '../Pages/Shop/Shop';
import DashboardLayout from '../Layouts/DashboardLayout';
import ManageUsers from '../Pages/Dashboard/ManageUsers';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            //
            {
                path: '/secret',
                element: <PrivateRoute>
                    <Secret></Secret>
                </PrivateRoute>
            }
        ]
    },
    // dashboard
    {
        path: 'dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            // admin dashboard routes
            {
                path: 'users',
                element: <ManageUsers></ManageUsers>
            }
        ]
    }
])

export default router;