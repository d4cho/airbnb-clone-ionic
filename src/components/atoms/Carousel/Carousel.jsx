import React from 'react';
import './Carousel.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = (props) => {
    const {
        list,
        paginationType,
        slideWidth,
        slideHeight,
        slidesPerView,
        spaceBetweenSlides,
        imageStyleOverride,
        titleStyleOverride,
        textStyleOverride,
    } = props;

    console.log('props', props.children);

    const handlePaginationType = () => {
        switch (paginationType) {
            case 'dots':
                return true;

            case 'fraction':
                return { type: 'fraction' };

            default:
                return false;
        }
    };

    return (
        <div className='Carousel_container'>
            <Swiper
                slidesPerView={slidesPerView || 1}
                spaceBetween={spaceBetweenSlides || 0}
                modules={[Pagination]}
                pagination={handlePaginationType()}
            >
                {list.map((item, idx) => {
                    return (
                        <SwiperSlide
                            key={idx}
                            style={{
                                '--slideWidth': slideWidth
                                    ? `${slideWidth}px`
                                    : '100%',
                                '--slideHeight': slideHeight
                                    ? `${slideHeight}px`
                                    : '100%',
                            }}
                        >
                            <>
                                <div
                                    style={{
                                        ...imageStyleOverride,
                                        '--url': `url(${item.url})`,
                                    }}
                                    className='slide_image'
                                />
                                {item.title && (
                                    <div style={titleStyleOverride}>
                                        {item.title}
                                    </div>
                                )}
                                {item.desc && (
                                    <div style={textStyleOverride}>
                                        {item.desc}
                                    </div>
                                )}
                            </>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Carousel;