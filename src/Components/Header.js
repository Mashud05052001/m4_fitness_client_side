import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import './Header.Module.css';
import headerLogo from '../Pictures/Logo/website_logo.png'
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [showUser, setShowUser] = useState(false);
    const handleLogout = () => {
        setShowUser(false);
        logOut().then(() => { }).catch(err => console.log(err));
    }
    const headerCenterItems = <>
        <li>
            <Link to='/home'>Home</Link>
        </li>
        <li>
            <Link to='/services'>Services</Link>
        </li>
        <li>
            <Link to='/reviews'>My Reviews</Link>
        </li>
        {
            !user &&
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
                        <h1 className='text-2xl font-semibold font-[cursive] ml-1'><span className='text-[#e39d2b]'>M4</span> Fitness</h1>
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
                    <div className=' cursor-pointer mr-3 border-2 relative border-[#ffb946]/30 rounded-full p-0.5' >
                        <img src={user.photoURL} alt="" className='w-10 h-10 rounded-full' title={user?.displayName ? user?.displayName : "No Name Found"} onClick={() => setShowUser(!showUser)} />
                        {
                            showUser ?
                                <div className='absolute z-10 duration-100 top-12 bg-gray-200 w-40 -right-[28px] py-4 pl-4 '>
                                    <p className='py-2'><Link to='/reviews' onClick={() => setShowUser(false)}>My Reviews</Link></p>
                                    <p className='py-2'><Link to='/addServices' onClick={() => setShowUser(false)}>Add Service</Link></p>
                                    <p className='py-2'><Link onClick={handleLogout}>Logout</Link></p>
                                </div>
                                :
                                <div className='absolute -z-10 duration-200  opacity-0 top-12  w-40 -right-[28px] py-4 pl-4 '>
                                    <div className='py-2' ><Link >My Reviews</Link></div>
                                    <div className='py-2'><Link>Add Service</Link></div>
                                    <div className='py-2'><Link onClick={handleLogout}>Logout</Link></div>
                                </div>

                        }
                    </div>

                }
            </div>
        </div>
    );
};

export default Header;