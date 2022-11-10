import React from 'react';
const Banner = () => {
    return (
        <div className="hero h-[700px]  relative" style={{ backgroundImage: `url("https://i.ibb.co/ysw4q9W/venti-views-I1-EWTM5m-FEM-unsplash.jpg")` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="text-white absolute left-[30px] md:left-[80px]">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold text-[#e39d2b]">WelCome to M4 Fitness</h1>
                    <p className="mb-5">Fitness is necessary for every person. In this side I personally train in some sections where I tried to give my best to my client for making them fit.</p>
                    <button className="btn bg-[#e39d2b] hover:bg-[#d38e1f]">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;