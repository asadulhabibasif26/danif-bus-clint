import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Home/Home/Home";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Store from "../Pages/Store/Store";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true ,
                Component: Home
            },
            {
                path: '/store',
                element: <PrivetRoute>
                    <Store></Store>
                </PrivetRoute>
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    }
])