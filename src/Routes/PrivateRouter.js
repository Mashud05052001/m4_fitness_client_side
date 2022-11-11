import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRouter = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className='text-center mt-12'>  <button className=" btn loading  border-0 text-lg  bg-[#ffb946] hover:bg-[#feae2e]">loading</button>   </div>

    }
    if (user) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
};

export default PrivateRouter;