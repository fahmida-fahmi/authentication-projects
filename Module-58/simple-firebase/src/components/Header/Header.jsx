import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>home</Link>
            <Link to='/login'>login</Link>
            {/* <Link to='/'>home</Link>
            <Link to='/'>home</Link>
            <Link to='/'>home</Link> */}
        </div>
    );
};

export default Header;