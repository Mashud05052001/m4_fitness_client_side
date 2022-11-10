import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
const ShowReviews = ({ service }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceID=${service._id}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    console.log(users);
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>User-Info</th>
                        <th>Service-Info</th>
                        <th>Ratings</th>
                        <th>Reviews</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}

                    {
                        users.map((user, index) => <tr key={index}>

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

export default ShowReviews;