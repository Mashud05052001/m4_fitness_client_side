import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddServices = () => {
    const navigate = useNavigate();
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.serviceName.value,
            img1 = form.img1.value,
            img2 = form.img2.value,
            img3 = form.img3.value,
            ratings = form.ratings.value,
            price = form.price.value,
            detailes = form.detailes.value;
        const service = {
            name: name,
            picture: img1,
            rating: ratings,
            price: price,
            description: detailes,
            images: [
                { image: img1 },
                { image: img2 },
                { image: img3 },
            ]
        }
        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service),
        }).then(res => res.json()).then(data => {
            if (data.acknowledged) {
                alert('You have successfully enrolled a service');
                form.reset();
                navigate('/');
            }
        })
    }

    return (
        <div className='max-w-screen-xl mx-auto mt-12'>
            <form onSubmit={handleAddService} className="border-2 border-[#ffb946]/80 border-b-0 border-r-0 card flex-shrink-0 w-full max-w-2xl mx-auto shadow-2xl rounded-bl-none rounded-tr-lg  bg-base-100 ">
                <div className="card-body ">
                    <section className='grid grid-cols-2 gap-4'>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input type="text" name='serviceName' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Cover PhotoURL</span>
                            </label>
                            <input type="text" name='img1' placeholder="imageURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text">Add Extra Photo 1 for detailes</span>
                            </label>
                            <input type="text" name='img2' placeholder="imageURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control col-span-1">
                            <label className="label">
                                <span className="label-text">Add Extra Photo 2 for detailes</span>
                            </label>
                            <input type="text" name='img3' placeholder="imageURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type="number" max={5} min={0} name='ratings' placeholder="ratings must be in (0-5)" className="input input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Service Price</span>
                            </label>
                            <input type="number" name='price' placeholder="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Service Price</span>
                            </label>
                            <textarea type="text" minLength={200} name='detailes' placeholder="Enter service detailes here. Detailes minimum length is 200 Characters." className="textarea textarea-bordered" required cols={10} rows={4} />
                        </div>

                    </section>

                    <div className="form-control mt-5">
                        <button className="btn border-0 bg-[#ffb946] hover:bg-[#feae2e] text-lg">Add Service</button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default AddServices;