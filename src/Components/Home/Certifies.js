import React from 'react';

const Certifies = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-32 mb-32 '>
            <div>
                <h1 className='text-4xl font-semibold text-center text-[#e39d2b]'>
                    My Certificates(3)
                </h1>
                <hr className='border-4 rounded-2xl mt-3 w-80 md:w-96 border-[#e39d2b]/60 mx-auto' />
            </div>
            <section className='grid grid-cols-1 md:grid-cols-2 px-8  xl:px-0 lg:grid-cols-3 mt-16 gap-12'>
                <div className='border-2 border-[#e39d2b] shadow-2xl rounded-2xl p-3'>
                    <h1 className='text-2xl font-semibold text-[#e39d2b] mb-4 mt-2' >Certification of Personal Training</h1>
                    <p className='mb-3'>
                        I have obtained my Personal Training Certificate from a reputed Fitness Institution of Bangladesh (PTCB) in 2021
                    </p>
                </div>
                <div className='border-2 border-[#e39d2b] shadow-2xl rounded-2xl p-3'>
                    <h1 className='text-2xl font-semibold text-[#e39d2b] mb-4 mt-2'>Certification of Fitness Mentor</h1>
                    <p className='mb-3'>I have obtained my Fitness Mentor Certificate from a reputed Fitness Institution of Bangladesh (PTCB) in 2021</p>
                </div>
                <div className='border-2 border-[#e39d2b] shadow-2xl rounded-2xl p-3'>
                    <h1 className='text-2xl font-semibold text-[#e39d2b] mb-4 mt-2'>Certification of Diet Planner</h1>
                    <p className='mb-3'>I have obtained my Diet Planner Certificate from a reputed Fitness Institution of Bangladesh (PTCB) in 2021</p>
                </div>
            </section>
        </div>
    );
};

export default Certifies;