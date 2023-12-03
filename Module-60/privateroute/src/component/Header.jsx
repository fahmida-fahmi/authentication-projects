import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Context';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div>

            <div className="navbar bg-primary text-primary-content flex justify-between">
                <div className='w-1/3 '>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
                    {user && <Link to='/order' className="btn btn-ghost normal-case text-xl">Order</Link>}
                    <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
                    <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
                    {/* <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link> */}
                </div>
                <div>
                    {
                        user ?
                            <div>

                                <span className='mx-5'>{user.displayName?user.displayName: user.email}</span>
                                <button className='btn btn-secondary' onClick={handleSignOut}>Sign Out</button>
                            </div>
                            :
                            <Link className='btn btn-success' to='/login'>Log In</Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Header;