import React, { useState, useRef } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './RoomDetailsPage.scss';
import { roomsData } from '../assets/data/rooms-data';
import { useParams } from 'react-router';
import ImageCarouselRD from '../components/organisms/RoomDetailsPage/ImageCarouselRD/ImageCarouselRD';
import DetailsRD from '../components/organisms/RoomDetailsPage/DetailsRD/DetailsRD';
import BottomReserveBar from '../components/molecules/RoomDetailsSections/BottomReserveBar/BottomReserveBar';
import { useAppContext } from '../context/AppContext';
import ReviewsModalPage from '../components/views/ReviewsModalPage.jsx/ReviewsModalPage';
import Modal from '../components/organisms/Modal/Modal';
import ImagesModalPage from '../components/views/ImagesModalPage/ImagesModalPage';

const RoomDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const roomData = roomsData.filter((item) => item.id === id)[0];

    const { isModalOpen, setIsModalOpen } = useAppContext();

    const [modalType, setModalType] = useState('');
    // reviews, images

    const modalRef = useRef<HTMLIonModalElement>(null);

    const handleModalClose = () => {
        setIsModalOpen(false);
        modalRef.current?.dismiss();
    };

    const handleModalOpen = (selectedModalType: string) => {
        setModalType(selectedModalType);
        setIsModalOpen(true);
    };

    const getModal = () => {
        switch (modalType) {
            case 'reviews':
                return (
                    <ReviewsModalPage
                        handleModalClose={handleModalClose}
                        rating={roomData.rating}
                        reviews={roomData.reviews}
                        reviewList={roomData.reviewList}
                        reviewCriteria={roomData.reviewCriteria}
                    />
                );

            case 'images':
                return <ImagesModalPage handleModalClose={handleModalClose} />;

            default:
                return <div>test</div>;
        }
    };

    return (
        <IonPage className='RoomDetailsPage_container'>
            <IonContent className='RoomDetailsPage_content' fullscreen>
                <ImageCarouselRD
                    roomData={roomData}
                    handleModalOpen={handleModalOpen}
                />
                <div style={{ paddingBottom: 100 }}>
                    <DetailsRD
                        roomData={roomData}
                        handleModalOpen={handleModalOpen}
                    />
                </div>
                <div
                    slot='fixed'
                    style={{
                        bottom: '0px',
                        width: '100%',
                    }}
                >
                    <BottomReserveBar roomData={roomData} />
                </div>

                <Modal
                    isModalOpen={isModalOpen}
                    modalRef={modalRef}
                    modalContent={getModal()}
                />
            </IonContent>
        </IonPage>
    );
};

export default RoomDetailsPage;
