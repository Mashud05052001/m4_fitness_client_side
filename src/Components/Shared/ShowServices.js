import React from 'react';
import { Link } from 'react-router-dom';

const ShowServices = ({ service }) => {
    const { description, name, picture, rating, _id } = service;
    console.log(service);
    return (
        <section className=' border-4 border-[#e39d2b]/50 p-1 rounded-2xl'>
            <div className='bg-orange-400/30 p-4 rounded-xl rounded-b-none'>
                <div>
                    <img src={picture} alt="" className='h-52 w-80 rounded-xl' />
                </div>
                <div className='mt-5'>
                    <h1 className='text-2xl  my-2 font-semibold'>{name}</h1>
                    <p>Detailes: {description.slice(0, 120)}...</p>
                </div>
            </div>
            <Link to={`/showSingleServices/${_id}`}>
                <button className='btn w-full rounded-t-none bg-[#e39d2b]/90 hover:bg-[#d38e1f]/90 border-0'>See Detailes</button>
            </Link>

        </section>
    );
};

export default ShowServices;