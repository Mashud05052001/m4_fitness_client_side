import React, { useContext, useState } from 'react';
import { Link, Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import ShowSingleServicesImageSlider from './ShowSingleServicesImageSlider';
import { AuthContext } from '../../Context/UserContext';
import ShowReviews from './ShowReviews';
import SheareUserReview from './SheareUserReview';

const ShowSingleServices = () => {
    const { user } = useContext(AuthContext);
    const services = useLoaderData();
    const location = useLocation();
    const navigate = useNavigate();
    const { description, images, name, rating, _id, price } = services;
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const ratings = form.ratings.value;
        const review = form.review.value;
        const name = form.name.value;
        // const date = new Date().toJSON();
        const date = new Date().toUTCString();
        const userReview = {
            email: user?.email,
            serviceID: _id,
            date: date,
            userInfo: {
                email: user?.email,
                image: user?.photoURL,
                userName: name,
            },
            serviceReview: {
                serviceName: services.name,
                ratings: ratings,
                review: review,
            }
        }
        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(userReview)
        }).then(res => res.json()).then(data => {
            if (data.acknowledged) {
                alert('You have successfully enrolled your review');
                navigate(`/services`);
            }
        })

    }
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
                        <div className='flex justify-between'>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#e39d2b] font-bold">{name}</h1>
                            <small className='flex text-lg items-center  text-[#e39d2b] font-semibold mt-1 mr-2'><AiFillStar className='mr-1  text-[#e39d2b]' /> {rating}</small>
                        </div>
                        <div className='flex mt-1 mr-2 float-right'>
                            <span className='mt-[1px] font-medium'>Price : </span><small className='flex text-lg items-center  text-[#e39d2b] font-bold ml-1'>{price} BDT</small>
                        </div>

                        <p className="py-6">{description}</p>
                        {
                            user ?
                                <div>
                                    {/* The button to open modal */}
                                    <label htmlFor="my-modal-3" className='btn border-0 text-lg bg-[#ffb946] hover:bg-[#feae2e]' >  Share Your Review Here
                                    </label>

                                    {/* Put this part before </body> tag */}
                                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box relative">
                                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 bg-[#ffb946] hover:bg-[#feae2e] border-0">✕</label>
                                            <SheareUserReview user={user} itemName={name} handleReview={handleReview} />
                                        </div>
                                    </div>
                                </div>
                                :
                                <Link to='/login' state={{ from: location }} replace>
                                    <button className='btn bg-[#ffb946] hover:bg-[#feae2e] border-0'>
                                        Please At first login to share your review
                                    </button>
                                </Link>
                        }
                    </div>

                </div>
            </div>
            <div className='my-12'>
                <h1 className='text-center mb-8 text-xl md:text-2xl lg:text-3xl font-semibold text-[#e39d2b] '>User Reviews on this service</h1>
                <div>
                    <ShowReviews service={services} />
                </div>

            </div>
        </div>
    );
};

export default ShowSingleServices;