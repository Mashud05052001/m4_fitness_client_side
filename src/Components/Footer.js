import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../Pictures/Logo/attachment_117878357.jpeg'
const Footer = () => {
    return (
        <div>
            <footer className="select-none footer p-10 max-w-screen-xl bg-black text-white
         mx-auto  grid grid-cols-3 lg:grid-cols-5 ">
                <div className='col-span-3 md:col-span-3 lg:col-span-2 w-full md:ml-0'>
                    <div className='w-full text-center lg:text-left'>
                        <div className='w-full  flex justify-center lg:justify-start mb-1'>
                            <img src={footerLogo} alt=".." className='w-20 lg:ml-4 rounded-full text-center' />
                        </div>
                        <h1 className='text-2xl font-semibold font-[cursive] ml-1'><span className='text-[#570df8]'>M4</span> Fitness</h1>
                        <p className='lg:float-left'>I always try  my best to provide the <br /> fittest  body any of my client.</p>
                    </div>
                </div>
                <div>
                    <span className="footer-title block lg:inline-block">Services</span>
                    <Link className="link link-hover block lg:inline-block">Branding</Link>
                    <Link className="link link-hover block lg:inline-block">Design</Link>
                    <Link className="link link-hover block lg:inline-block">Marketing</Link>
                    <Link className="link link-hover block lg:inline-block">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title block lg:inline-block">Company</span>
                    <Link className="link link-hover block lg:inline-block">About us</Link>
                    <Link className="link link-hover block lg:inline-block">Contact</Link>
                    <Link className="link link-hover block lg:inline-block">Jobs</Link>
                    <Link className="link link-hover block lg:inline-block">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title block lg:inline-block">Legal</span>
                    <Link className="link link-hover block lg:inline-block">Terms of use</Link>
                    <Link className="link link-hover block lg:inline-block">Privacy policy</Link>
                    <Link className="link link-hover block lg:inline-block">Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;