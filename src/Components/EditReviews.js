import React, { useEffect, useState } from 'react';

const EditReviews = ({ id, setEdit }) => {
    const [previousReview, setPreviousReview] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/reviews/${id}`).then(res => res.json()).then(data => setPreviousReview(data));
    // }, [])

    // console.log(previousReview);
    // console.log(id);
    return (
        <form >
            <div className="card-body ">
                <section className='relative '>
                    <div className='btn btn-sm btn-circle absolute -right-4 -top-4  bg-[#ffb946] hover:bg-[#feae2e] border-0' onClick={() => setEdit(false)}> X

                    </div>
                    <div className=' text-center font-medium'>UserName : {previousReview?.userInfo?.userName} </div>

                    <div className=' text-center font-medium mt-1'>Service Name : {previousReview?.serviceReview?.serviceName} <hr className='border-2 mt-3  rounded-full border-gray-300 ' /> </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Rating: Previous ratings = { }  </span>
                        </label>
                        <input type="number" max={5} min={0} name='ratings' placeholder="Ratings must be (0-5)" className="input input-bordered " required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Your Review</span>
                        </label>
                        <textarea name="review" className='textarea textarea-bordered' ></textarea>
                    </div>
                </section>

                <div className="form-control mt-5">
                    <button className="btn border-0 bg-[#ffb946] hover:bg-[#feae2e] text-lg">Share Review</button>
                </div>

            </div>
        </form>
    );
};

export default EditReviews;