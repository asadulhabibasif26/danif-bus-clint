import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Home/Home/Home";
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
                Component: Store
            }
        ]
    }
])