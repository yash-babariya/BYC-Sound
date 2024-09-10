import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultLayout";
import Home from "../components/home";
import Category from "./category";
import Signup from "../components/form/signup";
import Login from "../components/form/login";
import DelayedSuspense from "../common/loader/DelayedSuspense/DelayedSuspense";
import ProductInfo from "../components/productInfo";


const router = createBrowserRouter([
    {
        path: "/signup",
        element: (
            <DelayedSuspense>
                <Signup />
            </DelayedSuspense>
        ),
    },
    {
        path: "/login",
        element: (
            <DelayedSuspense>
                <Login />
            </DelayedSuspense>
        ),
    },
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: (
                    <DelayedSuspense>
                        <Home />
                    </DelayedSuspense>
                ),
            },
            {
                path: "/:category",
                element: <Category />,
            },
            {
                path: "/productinfo",
                element: <ProductInfo />,
            }
        ]
    },
    {
        path: "*",
        element: <h1>Page Not Found</h1>,
    }
]);

export default router;
