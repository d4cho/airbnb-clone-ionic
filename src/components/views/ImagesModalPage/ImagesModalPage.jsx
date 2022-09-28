import React from 'react';
import './ImagesModalPage.scss';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import { FiChevronLeft, FiShare } from 'react-icons/fi';
import Carousel from '../../atoms/Carousel/Carousel';

const ImagesModalPage = (props) => {
    const { roomData, handleModalClose } = props;

    const propertyImages = roomData.propertyOverviewImages.map((item, idx) => {
        return (
            <div key={idx} className='image_container'>
                <img className='image' src={item.url} alt={item.title} />
                <div className='image_title'>{item.title}</div>
            </div>
        );
    });

    return (
        <IonPage className='ImagesModalPage_container'>
            <IonHeader className='ImagesModalPage_header'>
                <FiChevronLeft size={28} onClick={handleModalClose} />
                <FiShare size={20} onClick={() => alert('share clicked')} />
            </IonHeader>
            <IonContent className='ImagesModalPage_content'>
                <div className='title'>Property overview</div>
                <div>
                    <Carousel freeMode={true} slidesPerView={2.1}>
                        {propertyImages}
                    </Carousel>
                </div>
                <div className='divider'></div>

                <div className='title'>Living room</div>
                <div>images</div>
            </IonContent>
        </IonPage>
    );
};

export default ImagesModalPage;
