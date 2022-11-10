import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1 className='text-3xl'>Error</h1>
            {
                error &&
                <div>
                    <p>{error.statusText || error.message}</p>
                    <p>{error.status}</p>
                </div>
            }
        </div>
    );
};

export default ErrorPage;