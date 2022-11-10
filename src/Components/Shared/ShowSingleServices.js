import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowSingleServicesImageSlider from './ShowSingleServicesImageSlider';

const ShowSingleServices = () => {
    const services = useLoaderData();
    const { description, images, name, picture, rating, _id } = services;
    return (
        <div className='max-w-screen-xl mx-auto my-12 px-5 sm:px-8 md:px-16'>
            <div className="hero bg-base-200">
                <div className="flex items-center flex-col xl:flex-row">
                    <div className='w-80 sm:w-[600px] md:w-[630px] lg:w-[800px] xl:w-96'>

                        {
                            <ShowSingleServicesImageSlider images={images} />
                        }
                    </div>
                    <div className='xl:ml-12 mt-12 xl:mt-0 '>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#e39d2b] font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                        <button className="btn bg-[#ffb946] hover:bg-[#feae2e] border-0 px-8 text-lg">ENter Your Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowSingleServices;