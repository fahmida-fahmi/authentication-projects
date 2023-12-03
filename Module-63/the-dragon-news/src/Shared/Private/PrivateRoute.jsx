import React, { useContext } from 'react';
import { AuthProvider } from '../../Auth/Context';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    
    const {user,loading} = useContext(AuthProvider)
    if(loading){
        return <span className="loading loading-spinner  text-success"></span>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' replace='true'></Navigate>
};

export default PrivateRoute;