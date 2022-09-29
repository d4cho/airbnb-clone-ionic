import React from 'react';
import './GalleryModalPage.scss';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import { FiChevronLeft, FiShare } from 'react-icons/fi';
import Carousel from '../../atoms/Carousel/Carousel';

const GalleryModalPage = (props) => {
    const { images, onBackClick, selectedImageIndex } = props;

    return (
        <IonPage className='GalleryModalPage_container'>
            <IonHeader className='GalleryModalPage_header'>
                <FiChevronLeft size={28} onClick={onBackClick} />
                <FiShare size={20} onClick={() => alert('share clicked')} />
            </IonHeader>
            <IonContent className='GalleryModalPage_content'>
                <div className='black_background'>
                    <Carousel
                        isFullHeight={true}
                        spaceBetweenSlides={15}
                        paginationType={'fraction'}
                        initialSlide={selectedImageIndex}
                    >
                        {images.map((item, idx) => {
                            return (
                                <div key={idx} className='carousel_slide'>
                                    <img
                                        src={item.url}
                                        alt={item.category + idx}
                                    />
                                    <div className='img_desc'>
                                        {item.category + ' ' + idx}
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default GalleryModalPage;
