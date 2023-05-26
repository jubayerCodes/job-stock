import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default Root;