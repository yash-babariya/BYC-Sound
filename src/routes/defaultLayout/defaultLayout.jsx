import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../common/header';

export default function DefaultLayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
