import React from 'react';
import { Spinner } from 'react-bootstrap';
// import { Redirect, Route } from 'react-router';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation()
    
    if(isLoading){
        return  <div className="mt-5 mb-5">
            <h1 className="fs-1 fw-bold text-primary mt-5 mb-5">Your Requested Page Is Loading</h1>
            <h1 className="fs-1 fw-bold text-primary mt-5 mb-5">Please Wait For A While</h1>
            <Spinner className="mt-5 mb-5" animation="border" variant="primary" />
        </div>
    }

    if (user.email){
        return children;
    }

    return <Navigate to="/login" state={{from:location}} />;
};

export default PrivateRoute;