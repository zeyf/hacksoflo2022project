import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const MidSection = () => {

    return (
        <div className="w-screen h-[65vh] bg-white flex items-center justify-center text-black">
            <div className="w-[75vw] h-full bg-white border-l-[1px] border-r-[1px] border-blue-500">
            <Swiper className="w-full h-full"
                loop={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false
                }}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className="w-[75vw] w-full h-full flex items-center justify-center border-2 border-red-500">Slide 1</SwiperSlide>
                <SwiperSlide className="w-[75vw] h-full flex items-center justify-center border-2 border-red-500">Slide 1</SwiperSlide>
                <SwiperSlide className="w-[75vw] h-full flex items-center justify-center border-2 border-red-500">Slide 1</SwiperSlide>
                <SwiperSlide className="w-[75vw] h-full flex items-center justify-center border-2 border-red-500">Slide 1</SwiperSlide>


            </Swiper>
            </div>
        </div>
    );
};

export default MidSection;