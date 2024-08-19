import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import { brain, reasearchProject, sitlImage } from '../assets';

const AboutMe = () => {
    return (
        <>
            <div id="aboutMe">
                <h1>About Me</h1>
                <p>About Me to be filled out...</p>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                >
                    <SwiperSlide>
                        <img src={brain} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={reasearchProject} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sitlImage} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default AboutMe;