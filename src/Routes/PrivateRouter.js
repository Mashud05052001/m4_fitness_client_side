import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRouter = ({ children }) => {
    let location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div>Loading...</div>
    }
    else if (user) {
        return { children };
    }
    else {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
};

export default PrivateRouter;