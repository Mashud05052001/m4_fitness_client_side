import React from 'react';
import Banner from './Banner';
import HomeServices from './HomeServices';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-10'>
            <Banner />
            <HomeServices />
        </div>
    );
};

export default Home;