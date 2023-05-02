import React from 'react';
import Header from '../pages/shared/Header';
import { Outlet } from 'react-router-dom';
import Banner from '../pages/home/Banner';
import ChefsSection from '../pages/home/ChefsSection';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;