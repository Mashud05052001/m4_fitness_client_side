import React from 'react';

const SheareUserReview = ({ user, itemName, handleReview }) => {

    return (
        <form onSubmit={handleReview}>
            <div className="card-body ">
                <section className=' '>
                    <div className=' text-center font-medium'>UserName : {user?.displayName} <hr className='border-2 mt-1  rounded-full border-gray-300 ' /> </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <p className=' text-center font-medium mt-5'>Service Name : {itemName} <hr className='border-2 mt-1  rounded-full border-gray-300 ' /> </p>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Rating</span>
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

export default SheareUserReview;