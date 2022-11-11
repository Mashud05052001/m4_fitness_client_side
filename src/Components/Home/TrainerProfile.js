import React from 'react';

const TrainerProfile = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-12'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/BKYB59D/anastase-maragos-eh-Qimz6-1q-M-unsplash.jpg" className="w-96 h-[650px] rounded-lg shadow-2xl"
                        alt='' />
                    <div className='lg:mr-10'>
                        <h1 className="mb-5 text-3xl float-left   md:text-5xl font-bold text-[#e39d2b]">Mashudur Rahman</h1>
                        <p className="pt-2 pb-6 text-xl font-semibold">
                            A professional gym Trainer <br />
                            <p className='mb-4'>
                                Certified by <span className="tooltip tooltip-right font-bold text-[#d38e1f]" data-tip="Personal Trainer Courses Bangladesh – Fitness Instructor Certifications ">PTCB</span> <br />
                            </p>
                            Provide my client to best service from me. <br />
                            Take care every single things of them. <br />
                            You can support me & my website <br />
                            to tells your all known people <br />


                        </p>
                        <button className="btn  bg-[#e39d2b] hover:bg-[#d38e1f] border-0" onClick={() => alert('It will be updated soon')}>View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerProfile;