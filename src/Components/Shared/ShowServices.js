import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
const ShowServices = ({ service }) => {
    const { description, name, picture, rating, _id } = service;
    return (
        <section className='relative h-[580px] border-4 bg-orange-400/30 border-[#e39d2b]  rounded-2xl'>
            <div className=' min-h-[500px] p-4 rounded-xl rounded-b-none '>
                <div className='-m-[24px] pb-2 '>
                    <img src={picture} alt="" className='h-52 w-full rounded-xl rounded-b-none ' />
                </div>
                <div className='mt-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-2xl  my-2 font-semibold'>{name}</h1>
                        <small className='flex items-center text-orange-700 font-semibold mt-1 mr-2'><AiFillStar className='mr-1 text-orange-700' /> {rating}</small>
                    </div>
                    <p>Detailes: {description.slice(0, 120)}...</p>
                </div>
            </div>
            <Link to={`/showSingleServices/${_id}`}>
                <button className='absolute bottom-0 btn w-full rounded-b-xl rounded-t-none bg-[#e39d2b]/90 hover:bg-[#d38e1f]/90 border-0'>See Detailes</button>
            </Link>

        </section>
    );
};

export default ShowServices;