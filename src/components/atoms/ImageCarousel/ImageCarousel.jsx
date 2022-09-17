import React from 'react';
import './ImageCarousel.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const ImageCarousel = (props) => {
    const { images } = props;
    return (
        <div className='ImageCarousel_container'>
            <Swiper modules={[Pagination]} pagination={true}>
                {images.map((url, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                            <div
                                style={{
                                    '--url': `url(${url})`,
                                }}
                                className='slide_image'
                            ></div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default ImageCarousel;
