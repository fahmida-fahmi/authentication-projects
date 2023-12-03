import React from 'react';

import BreakingNews from './BreakingNews';
import SIteTitle from './SIteTitle';
import NavbarMenu from './NavbarMenu';
const Header = () => {
    return (
        <div>
            <SIteTitle/>
            <BreakingNews/>
            <NavbarMenu/>

        </div>
    );
};

export default Header;