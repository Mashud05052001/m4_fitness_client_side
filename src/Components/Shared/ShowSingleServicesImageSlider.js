import React, { useRef } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

const ShowSingleServicesImageSlider = ({ images }) => {
    const SamplePrevArrow = () => <div />
    const slideRef = useRef();
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <SamplePrevArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className='relative'>
            <div className='absolute bottom-5 right-5 z-10'>
                <button className='mx-2 border-2 p-3 rounded-full duration-100 bg-[#ffb946] hover:bg-[#feae2e]' onClick={() => slideRef.current.slickPrev()}><AiOutlineDoubleLeft className='text-xl' /></button>
                <button className='ml-2 border-2 p-3 rounded-full duration-100 bg-[#ffb946] hover:bg-[#feae2e]' onClick={() => slideRef.current.slickNext()}><AiOutlineDoubleRight className='text-xl' /></button>
            </div>
            <Slider {...settings} ref={slideRef}>
                {
                    images.map((image, index) => <div key={index}>
                        <section>
                            <PhotoProvider>
                                <PhotoView src={images[0].image}>
                                    <img src={image.image} alt="" className='w-full h-96 rounded-lg cursor-pointer' />
                                </PhotoView>
                            </PhotoProvider>
                        </section>
                    </div>)
                }
                {/* <div >
                    <PhotoProvider>
                        <PhotoView src={images[0].image}>
                            <img src={images[0].image} alt="" className='w-full h-96 rounded-lg cursor-pointer' />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div >
                    <PhotoProvider>
                        <PhotoView src={images[1].image}>
                            <img src={images[1].image} alt="" className='w-full h-96 rounded-lg cursor-pointer' />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div >
                    <PhotoProvider>
                        <PhotoView src={images[2].image}>
                            <img src={images[2].image} alt="" className='w-full h-96 rounded-lg cursor-pointer' />
                        </PhotoView>
                    </PhotoProvider>
                </div> */}

            </Slider>
        </div>
    );
};

export default ShowSingleServicesImageSlider;