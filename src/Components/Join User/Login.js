import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import loginAnimation from "../../animation/login.json";
import { HiEye, HiEyeOff } from 'react-icons/hi';
import fbIcon from '../../Pictures/icons/loginregister/facebook.png';
import githubIcon from '../../Pictures/icons/loginregister/github.png';
import googleIcon from '../../Pictures/icons/loginregister/google.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useTitle from '../Shared/useTitle';
import jwt from '../Shared/jwt';

const Login = () => {
    useTitle("Login");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const { login, facebookJoin, googleJoin, githubJoin, resetPassword } = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password).then(result => {
            const user = result.user;
            const currentUser = { email: user?.email }
            jwt(currentUser);
            // fetch('https://server-side-assignment.vercel.app/jwt', {
            //     method: "POST",
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(currentUser)
            // }).then(res => res.json()).then(data => {
            //     // console.log("asd", data);
            //     localStorage.setItem('token',data.token)
            // })
            navigate(from, { replace: true });
            form.reset();
        }).catch(error => {
            if (error.message === "Firebase: Error (auth/user-not-found).") {
                setError("User not found with this email");
            }
            else if (error.message === "Firebase: Error (auth/wrong-password).") {
                setError("Wrong Password");
            }
            else setError(error.message);
        })
    }
    const handleForget = () => {
        const email = window.prompt("Enter Your E-Mail Address")
        if (!email.endsWith('.com')) {
            const confirm = window.confirm("Your email address is not valid. Are you want to try again?")
            if (confirm) handleForget();
        }
        resetPassword(email).then(() => { window.alert("Please check your email to reset the password") }).catch(err => console.log(err));
    }
    const handleGoogle = () => {
        googleJoin().then(result => {
            console.log(result.user);
            const user = result.user;
            const currentUser = { email: user?.email }
            jwt(currentUser);
            navigate(from, { replace: true });
        }).catch(error => console.log(error));
    }
    const handleFacebook = () => {
        facebookJoin().then(result => {
            console.log(result.user);
            const user = result.user;
            const currentUser = { email: user?.email }
            jwt(currentUser);
            navigate(from, { replace: true });
        }).catch(error => console.log(error));
    }
    const handleGithub = () => {
        githubJoin().then(result => {
            console.log(result.user);
            const user = result.user;
            const currentUser = { email: user?.email }
            jwt(currentUser);
            navigate(from, { replace: true });
        }).catch(error => console.log(error));
    }

    return (
        <section className='max-w-screen-xl mb-20 mx-auto grid grid-cols-1 md:grid-cols-2 mt-20 '>
            <div className='w-96 mx-auto md:mx-0'>
                <Lottie animationData={loginAnimation} loop={true} />
            </div>
            <div className='mx-auto md:mx-0'>
                <form onSubmit={handleSubmit} className="border-2 border-[#ffb946]/80 border-b-0 border-r-0 card flex-shrink-0 w-full max-w-sm shadow-2xl rounded-bl-none rounded-tr-lg  bg-base-100 ">
                    <div className="card-body ">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                            {
                                showPassword ?
                                    <div className='absolute right-4 bottom-3.5'><HiEyeOff className='w-8 h-5 text-[#e39d2b] cursor-pointer' onClick={() => setShowPassword(!showPassword)} /></div>
                                    :
                                    <div className='absolute right-4 bottom-3.5'><HiEye className='w-8 h-5 text-[#e39d2b] cursor-pointer' onClick={() => setShowPassword(!showPassword)} /></div>
                            }

                        </div>
                        <div>
                            {
                                error &&
                                <div className='text-red-600 ml-1 mt-2 -mb-1'>
                                    {error}
                                </div>
                            }
                            <label className="label mt-1" onClick={handleForget}>
                                <p className="label-text-alt link link-hover">Forgot password?</p>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn border-0 bg-[#ffb946] hover:bg-[#feae2e] text-lg">Login</button>
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
                                <p ><span className="opacity-80">New User? </span> <Link to="/register" className='text-[#dc992f] font-bold hover:underline'>Register Now</Link></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;