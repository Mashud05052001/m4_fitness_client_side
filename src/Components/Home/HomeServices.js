import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowServices from '../Shared/ShowServices';

const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services?count=3')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className='my-20'>
            <h1 className='text-center  text-4xl text-[#e39d2b] mb-12 font-bold'>My Provided Services</h1>
            <div className='mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 xl:px-0  px-10'>
                {
                    services.map(service => <ShowServices key={service._id} service={service} />)
                }
            </div>
            <div className='text-center'>
                <Link to='/services' ><button className='px-12 border-0 text-lg btn bg-[#e39d2b] hover:bg-[#d38e1f]'>Show All</button></Link>
            </div>
        </div>
    );
};

export default HomeServices;