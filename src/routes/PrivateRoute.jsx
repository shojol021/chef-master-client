import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div style={{ position: 'fixed', zIndex: 9999, top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Spinner animation="border" variant="warning" />
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRoute;