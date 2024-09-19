import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../common/header';

export default function DefaultLayout() {
    const location = useLocation();

    // Check if the current route is the Home page ("/")
    const isHomePage = location.pathname === "/";

    return (
        <div>
            {/* Pass a prop to Header to apply different styles */}
            <Header isHomePage={isHomePage} />
            <Outlet /> {/* Render the child components */}
        </div>
    );
}
