import React from 'react';
import Nav from './nav';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-3/5 mx-auto'>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;