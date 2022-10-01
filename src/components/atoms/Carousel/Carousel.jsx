import React from 'react';
import './Carousel.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper';
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
        centeredSlides,
        freeMode,
        loop,
        isFullHeight,
        initialSlide,
    } = props;

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

    const fullHeight = {
        height: '100%',
    };

    return (
        <div className='Carousel_container' style={isFullHeight && fullHeight}>
            <Swiper
                slidesPerView={slidesPerView || 1}
                spaceBetween={spaceBetweenSlides || 0}
                modules={[Pagination, FreeMode]}
                pagination={handlePaginationType()}
                centeredSlides={centeredSlides}
                freeMode={freeMode}
                loop={loop}
                style={isFullHeight && fullHeight}
                initialSlide={initialSlide || 0}
            >
                {props.children
                    ? props.children.map((item, idx) => {
                          return (
                              <SwiperSlide
                                  key={idx}
                                  style={isFullHeight && fullHeight}
                              >
                                  {item}
                              </SwiperSlide>
                          );
                      })
                    : list.map((item, idx) => {
                          return (
                              <SwiperSlide
                                  className='custom-swiper-slide'
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
