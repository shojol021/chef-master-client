import React from 'react';
import Header from '../pages/shared/Header';
import { Outlet } from 'react-router-dom';
import Banner from '../pages/home/Banner';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;