import React, { useContext, useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { AuthContext } from '../Context/UserContext';
import { MdDelete, MdEdit } from 'react-icons/md';
import SheareUserReview from './Shared/SheareUserReview';
import EditReviews from './EditReviews';
import useTitle from './Shared/useTitle';
import { Navigate } from 'react-router-dom';

const Reviews = () => {
    useTitle(' User Reviews');
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [edit, setEdit] = useState(false);
    const [review, setReview] = useState({});
    useEffect(() => {
        fetch(`https://server-side-assignment.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    alert('You have to login first');
                    <Navigate to='/login'></Navigate>
                    return logOut();
                }
                return res.json()
            })
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
            fetch(`https://server-side-assignment.vercel.app/reviews/${id}`, {
                method: "DELETE",
            }).then(res => res.json()).then(data => {
                if (data.acknowledged) {
                    const otherItems = reviews.filter(item => item._id !== id);
                    setReviews(otherItems);
                }
            });
        }
    }
    const handleEdit = (id, review) => {
        setEdit(true);
        setReview(review);
    }
    // console.log(reviews.length);
    return (
        <div className='relative'>
            <div >
                {
                    (reviews.length > 0)
                        ?
                        <div className="overflow-x-auto max-w-screen-xl mx-auto my-10 ">
                            <table className="table w-full">
                                {/* <!-- head --> */}
                                <thead>
                                    <tr>
                                        <th>Delete</th>
                                        <th>User-Info</th>
                                        <th>Service-Info</th>
                                        <th>Ratings</th>
                                        <th>Reviews</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <!-- row 1 --> */}

                                    {
                                        reviews.map((review, index) => <tr key={index}>
                                            <td >
                                                <div onClick={() => handleDelete(review._id)}>
                                                    <MdDelete className='text-red-500 cursor-pointer duration-150 hover:text-red-600 w-6 h-6' />
                                                </div>
                                            </td>

                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={review.userInfo.image} alt='' />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h3 className='text-xl font-semibold'>{review.userInfo.userName}</h3>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h4 className='font-medium'>{review.serviceReview.serviceName}</h4>
                                            </td>
                                            <td>
                                                <small className='flex text-lg items-center  text-[#e39d2b] font-semibold mt-1 mr-2'><AiFillStar className='mr-1  text-[#e39d2b]' /> {review.serviceReview.ratings}</small>
                                            </td>
                                            <th>
                                                <p className='text-md'>{review.serviceReview.review}</p>
                                            </th>
                                            <td >
                                                <MdEdit className='text-orange-400 cursor-pointer duration-150 hover:text-orange-500 w-6 h-6' onClick={() => handleEdit(user?._id, review)}

                                                />

                                            </td>
                                        </tr>)
                                    }
                                </tbody>

                            </table>


                        </div>
                        :
                        <div>
                            <h1 className='text-center mt-16 text-red-500 text-4xl font-bold '>You have No Reviews Yet</h1>
                        </div>

                }
            </div>
            <div className={`absolute left-0 right-0 mx-auto top-0 w-96 z-10 bg-gray-200 rounded-lg
             ${edit ? 'z-10 opacity-100 duration-150' : '-z-10 duration-150 opacity-0'}`} >
                <EditReviews setEdit={setEdit} item={review} />
            </div>
        </div>
    );
};

export default Reviews;