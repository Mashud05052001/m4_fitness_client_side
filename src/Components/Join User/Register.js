import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import loginAnimation from "../../animation/login.json";
import { HiEye, HiEyeOff } from 'react-icons/hi';
import fbIcon from '../../Pictures/icons/loginregister/facebook.png';
import githubIcon from '../../Pictures/icons/loginregister/github.png';
import googleIcon from '../../Pictures/icons/loginregister/google.png';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const { updateUser, register, facebookJoin, googleJoin, githubJoin } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photourl.value;
        const confirmPassword = form.confirmPassword.value;
        // console.log(email, password, photo, confirmPassword, name);
        const profile = { displayName: name, photoURL: photo }
        register(email, password).then(result => {
            const user = result.user;
            console.log(user);
            updateUser(profile).then(() => { }).catch(err => console.log(err));
            alert('You have successfully register our website');
            <Navigate to='/' />
        }).catch(error => {
            if (error.message === "Firebase: Error (auth/user-not-found).") {
                setError("User not found in firebase.");
            }
            else setError(error.message);
        })
    }
    const handleGoogle = () => {
        googleJoin().then(result => {
            console.log(result.user);
        }).catch(error => console.log(error));
    }
    const handleFacebook = () => {
        facebookJoin().then(result => {
            console.log(result.user);
        }).catch(error => console.log(error));
    }
    const handleGithub = () => {
        githubJoin().then(result => {
            console.log(result.user);
        }).catch(error => console.log(error));
    }

    return (
        <section className='max-w-screen-xl mx-auto lg:grid grid-cols-3 mt-20 gap-32 mb-20 lg:mb-0'>
            <div className='lg:w-96 -mt-32 lg:mt-0'>
                <Lottie animationData={loginAnimation} loop={true} className='mt-20' />
            </div>
            <div className='lg:col-span-2 px-6 lg:px-0'>
                <form onSubmit={handleSubmit} className="border-2 border-[#ffb946]/80 border-b-0 border-r-0 card flex-shrink-0 w-full max-w-2xl mx-auto shadow-2xl rounded-bl-none rounded-tr-lg  bg-base-100 ">
                    <div className="card-body ">
                        <section className='grid grid-cols-2 gap-4'>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name='photourl' placeholder="photoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} name='confirmPassword' placeholder="password" className="input input-bordered" required />
                                {
                                    showPassword ?
                                        <div className='absolute right-4 bottom-3.5'><HiEyeOff className='w-8 h-5 text-[#e39d2b] cursor-pointer' onClick={() => setShowPassword(!showPassword)} title="HIDE PASSWORD" /></div>
                                        :
                                        <div className='absolute right-4 bottom-3.5'><HiEye className='w-8 h-5 text-[#e39d2b] cursor-pointer' onClick={() => setShowPassword(!showPassword)} title="SHOW PASSWORD" /></div>
                                }
                            </div>
                        </section>
                        <div>
                            {
                                error &&
                                <div className='text-red-600 ml-1 mt-2 -mb-1'>
                                    {error}
                                </div>
                            }
                        </div>
                        <div className="form-control mt-5">
                            <button className="btn border-0 bg-[#ffb946] hover:bg-[#feae2e] text-lg">Sign Up</button>
                        </div>
                        <div className='text-center mt-5 select-none'>
                            <p className='text-sm font-medium opacity-70 '>Or Sign In With</p>
                            <section className='flex justify-center mt-4'>
                                <div className='mx-3 cursor-pointer' onClick={handleGoogle}>
                                    <img src={googleIcon} className='w-6' alt="" />
                                </div>
                                <div className='mx-3 cursor-pointer' onClick={handleFacebook}>
                                    <img src={fbIcon} className='w-6' alt="" />
                                </div>
                                <div className='mx-3 cursor-pointer' onClick={handleGithub}>
                                    <img src={githubIcon} className='w-6' alt="" />
                                </div>
                            </section>
                            <div className='mt-7 -mb-4'>
                                <p ><span className="opacity-80">Already Have An Account? </span> <Link to="/login" className='text-[#dc992f] font-bold hover:underline'>Login Now</Link></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;