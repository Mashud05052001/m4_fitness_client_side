import React, { useEffect, useState } from 'react';

const EditReviews = ({ item, setEdit }) => {
    const _id = item?._id, date = item?.date, email = item?.email, serviceID = item?.serviceID,
        userInfo = item?.userInfo, serviceReview = item?.serviceReview;
    const handleReview = event => {
        event.preventDefault();
        const confirmation = window.confirm("Are you sure to update the user ?")
        if (confirmation) {
            const form = event.target;
            const ratings = form.ratings.value;
            const review = form.review.value;
            serviceReview.ratings = ratings;
            serviceReview.review = review;
            const updatedReview = {
                _id: _id,
                email: email,
                serviceID: serviceID,
                date: date,
                userInfo: userInfo,
                serviceReview: serviceReview,
            }
            const serviceInfo = updatedReview?.serviceReview;
            fetch(`http://localhost:5000/reviews/${_id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(serviceInfo),
            }).then(res => res.json()).then(data => {
                if (data.acknowledged) {
                    alert("You have successfully updated user")
                    form.reset();
                    setEdit(false);
                }
            })
        }

    }
    return (
        <form onSubmit={handleReview}>
            <div className="card-body ">
                <section className='relative '>
                    <div className='btn btn-sm btn-circle absolute -right-4 -top-4  bg-[#ffb946] hover:bg-[#feae2e] border-0' onClick={() => setEdit(false)}> X

                    </div>
                    <div className=' text-center font-medium'>UserName : {item?.userInfo?.userName} </div>

                    <div className=' text-center font-medium mt-1'>Service Name : {item?.serviceReview?.serviceName} <hr className='border-2 mt-3  rounded-full border-gray-300 ' /> </div>

                    <div className="form-control mt-3">
                        <label className="label">
                            <span className="label-text">Update Your Ratings  </span>
                        </label>
                        <input type="number" max={5} min={0} name='ratings' placeholder="Ratings must be (0-5)" className="input input-bordered " required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Update Your Review</span>
                        </label>
                        <textarea name="review" className='textarea textarea-bordered' ></textarea>
                    </div>
                </section>

                <div className="form-control mt-5">
                    <button className="btn border-0 bg-[#ffb946] hover:bg-[#feae2e] text-lg">
                        Update Review
                    </button>
                </div>

            </div>
        </form>
    );
};

export default EditReviews;





