import React, { useContext, useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AuthContext } from '../Context/UserContext';
import { MdDelete } from 'react-icons/md';
import app from '../Firebase/firebase.init';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    // console.log("previous", reviews);
    // sprting date
    reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    // console.log("after", reviews);
    const handleDelete = (id) => {
        console.log(id);
        const confirm = window.confirm('Are you sure to delete this reviews?')
        if (confirm) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: "DELETE",
            }).then(res => res.json()).then(data => {
                if (data.acknowledged) {
                    const otherItems = reviews.filter(item => item._id !== id);
                    setReviews(otherItems);
                }
            });
        }
    }
    return (
        <div className="overflow-x-auto max-w-screen-xl mx-auto my-10">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>User-Info</th>
                        <th>Service-Info</th>
                        <th>Ratings</th>
                        <th>Reviews</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}

                    {
                        reviews.map((user, index) => <tr key={index}>
                            <td >
                                <div onClick={() => handleDelete(user._id)}>
                                    <MdDelete className='text-red-500 cursor-pointer duration-150 hover:text-red-600 w-6 h-6' />
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.userInfo.image} alt='' />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold'>{user.userInfo.userName}</h3>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h4 className='font-medium'>{user.serviceReview.serviceName}</h4>
                            </td>
                            <td>
                                <small className='flex text-lg items-center  text-[#e39d2b] font-semibold mt-1 mr-2'><AiFillStar className='mr-1  text-[#e39d2b]' /> {user.serviceReview.ratings}</small>
                            </td>
                            <th>
                                <p className='text-md'>{user.serviceReview.review}</p>
                            </th>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Reviews;