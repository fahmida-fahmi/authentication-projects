import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='w-1/3 mx-auto flex justify-between py-5'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
        </div>
    );
};

export default Nav;