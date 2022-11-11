import React from 'react';
import Banner from './Banner';
import Certifies from './Certifies';
import HomeServices from './HomeServices';
import TrainerProfile from './TrainerProfile';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-10'>
            <Banner />
            <HomeServices />
            <TrainerProfile />
            <Certifies />
        </div>
    );
};

export default Home;