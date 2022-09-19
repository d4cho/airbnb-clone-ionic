import React from 'react';
import './ImageCarousel.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const ImageCarousel = (props) => {
    const { images, paginationType, styleOverride } = props;

    const handlePaginationType = () => {
        switch (paginationType) {
            case 'dots':
                return true;

            case 'fraction':
                return { type: 'fraction' };

            default:
                return true;
        }
    };

    return (
        <div className='ImageCarousel_container'>
            <Swiper modules={[Pagination]} pagination={handlePaginationType()}>
                {images.map((url, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                            <div
                                style={{
                                    ...styleOverride,
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
