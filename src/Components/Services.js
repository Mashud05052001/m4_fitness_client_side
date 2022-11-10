import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowServices from './Shared/ShowServices';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className='max-w-screen-xl mx-auto my-16'>
            <div className='mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 xl:px-0  px-10'>
                {
                    services.map(service => <ShowServices key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;