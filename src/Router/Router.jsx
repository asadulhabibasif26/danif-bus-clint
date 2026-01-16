import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Home/Home/Home";
import Store from "../Pages/Store/Store";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";


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
                Component: Store
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