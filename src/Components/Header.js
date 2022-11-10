import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import './Header.Module.css';
import headerLogo from '../Pictures/Logo/website_logo.png'
const Header = () => {
    const { user } = useContext(AuthContext);
    const headerCenterItems = <>
        <li>
            <Link to='/home'>Home</Link>
        </li>
        <li>
            <Link to='/services'>Services</Link>
        </li>
        <li>
            <Link to='/reviews'>Reviews</Link>
        </li>
        {
            user ?
                <li>   <Link>Logout</Link></li>
                :
                <li>  <Link to='/login'>Login</Link></li>

        }
    </>
    return (
        <div className="navbar bg-gray-300/60 rounded-b-xl max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg font-medium">
                        {headerCenterItems}
                    </ul>
                </div>
                <Link to='/'>
                    <div className='flex items-center cursor-pointer'>
                        <img src={headerLogo} alt=".." className=' w-20' />
                        <h1 className='text-2xl font-semibold font-[cursive] ml-1'><span className='text-[#570df8]'>M4</span> Fitness</h1>
                    </div>
                </Link>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-lg font-medium">
                    {headerCenterItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user &&
                    <div>
                        mahi
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;