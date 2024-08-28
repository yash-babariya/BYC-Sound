import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultLayout";
const Home = React.lazy(() => import('../components/home'));
const Category = React.lazy(() => import('./category'));
const Signup = React.lazy(() => import('../components/form/signup'));
const Login = React.lazy(() => import('../components/form/login'));

// import Signup from "../components/form/signup";
// import Login from "../components/form/login";




const router = createBrowserRouter([
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/:category",
                element: <Category />,
            }
        ]
    },
    {
        path: "*",
        element: <h1>Page Not Found</h1>,
    }
]);

export default router;
