import React, { useRef, useState } from 'react';
import './ImagesModalPage.scss';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import { FiChevronLeft, FiShare } from 'react-icons/fi';
import Carousel from '../../atoms/Carousel/Carousel';
import ImagesGridLayout from '../../organisms/ImagesGridLayout/ImagesGridLayout';
import Modal from '../../organisms/Modal/Modal';
import GalleryModalPage from '../GalleryModalPage/GalleryModalPage';

const ImagesModalPage = (props) => {
    const { roomData, handleModalClose } = props;
    const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const galleryModalRef = useRef();

    const handleGalleryModalClose = () => {
        setIsGalleryModalOpen(false);
        galleryModalRef.current?.dismiss();
    };

    const livingRoomRef = useRef();
    const fullKitchenRef = useRef();
    const bedroom1Ref = useRef();
    const bedroom2Ref = useRef();
    const fullBathroomRef = useRef();
    const diningRoomRef = useRef();
    const exteriorRef = useRef();
    const patioRef = useRef();
    const additionalPhotosRef = useRef();

    const scrollToRef = (category) => {
        let ref;

        switch (category) {
            case 'livingRoom':
                ref = livingRoomRef;
                break;
            case 'fullKitchen':
                ref = fullKitchenRef;
                break;
            case 'bedroom1':
                ref = bedroom1Ref;
                break;
            case 'bedroom2':
                ref = bedroom2Ref;
                break;
            case 'fullBathroom':
                ref = fullBathroomRef;
                break;
            case 'diningRoom':
                ref = diningRoomRef;
                break;
            case 'exterior':
                ref = exteriorRef;
                break;
            case 'patio':
                ref = patioRef;
                break;
            case 'additionalPhotos':
                ref = additionalPhotosRef;
                break;
            default:
                ref = livingRoomRef;
                break;
        }

        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const propertyOverviewImages = roomData.categorizedImages
        .filter((image) => image.title)
        .map((item, idx) => {
            return (
                <div
                    key={idx}
                    className='image_container'
                    onClick={() => scrollToRef(item.category)}
                >
                    <img className='image' src={item.url} alt={item.title} />
                    <div className='image_title'>{item.title}</div>
                </div>
            );
        });

    const getFilteredImages = (category) => {
        return roomData.categorizedImages.filter(
            (image) => image.category === category
        );
    };

    const hasImages = (category) => {
        return (
            roomData.categorizedImages.filter(
                (image) => image.category === category
            ).length > 0
        );
    };

    const handleImageClick = (url) => {
        const selectedImgIdx = roomData.categorizedImages.findIndex(
            (el) => el.url === url
        );
        setSelectedImageIndex(selectedImgIdx);
        setIsGalleryModalOpen(true);
    };

    return (
        <IonPage className='ImagesModalPage_container'>
            <IonHeader className='ImagesModalPage_header'>
                <FiChevronLeft size={28} onClick={handleModalClose} />
                <FiShare
                    size={20}
                    // onClick={() => alert('share clicked')}
                />
            </IonHeader>
            <IonContent className='ImagesModalPage_content'>
                <div className='title'>Property overview</div>
                <div>
                    <Carousel freeMode={true} slidesPerView={2.1}>
                        {propertyOverviewImages}
                    </Carousel>
                </div>
                <div className='divider'></div>

                {hasImages('livingRoom') && (
                    <>
                        <div ref={livingRoomRef} className='title'>
                            Living room
                        </div>
                        <ImagesGridLayout
                            images={getFilteredImages('livingRoom')}
                            onImageClick={(url) => handleImageClick(url)}
                        />
                    </>
                )}

                {hasImages('fullKitchen') && (
                    <>
                        <div ref={fullKitchenRef} className='title'>
                            Full kitchen
                        </div>
                        <ImagesGridLayout
                            images={getFilteredImages('fullKitchen')}
                            onImageClick={(url) => handleImageClick(url)}
                        />
                    </>
                )}

                {hasImages('bedroom1') && (
                    <>
                        <div ref={bedroom1Ref} className='title'>
                            Bedroom 1
                        </div>
                        <ImagesGridLayout
                            images={getFilteredImages('bedroom1')}
                            onImageClick={(url) => handleImageClick(url)}
                        />
                    </>
                )}

                {hasImages('bedroom2') && (
                    <>
                        <div ref={bedroom2Ref} className='title'>
                            Bedroom 2
                        </div>
                        <ImagesGridLayout
                            images={getFilteredImages('bedroom2')}
                            onImageClick={(url) => handleImageClick(url)}
                        />
                    </>
                )}

                {hasImages('fullBathroom') && (
                    <>
                        <div ref={fullBathroomRef} className='title'>
                            Full bathroom
                        </div>
                        <ImagesGridLayout
                            images={getFilteredImages('fullBathroom')}
                            onImageClick={(url) => handleImageClick(url)}
                        />
                    </>
                )}

                {hasImages('diningRoom') && (
                    <>
                        <div ref={diningRoomRef} className='title'>
                            Dining room
                        </div>
                        <ImagesGridLayout
                            images={getFilteredImages('diningRoom')}
                            onImageClick={(url) => handleImageClick(url)}
                        />
                    </>
                )}

                {hasImages('exterior') && (
                    <>
                        <div ref={exteriorRef} className='title'>
                            Exterior
                        </div>
                        <ImagesGridLayout
                            images={getFilteredImages('exterior')}
                            onImageClick={(url) => handleImageClick(url)}
                        />
                    </>
                )}

                {hasImages('patio') && (
                    <>
                        <div ref={patioRef} className='title'>
                            Patio
                        </div>
                        <ImagesGridLayout
                            images={getFilteredImages('patio')}
                            onImageClick={(url) => handleImageClick(url)}
                        />
                    </>
                )}

                {hasImages('additionalPhotos') && (
                    <>
                        <div ref={additionalPhotosRef} className='title'>
                            Additional photos
                        </div>
                        <ImagesGridLayout
                            images={getFilteredImages('additionalPhotos')}
                            onImageClick={(url) => handleImageClick(url)}
                        />
                    </>
                )}

                <Modal
                    isModalOpen={isGalleryModalOpen}
                    modalRef={galleryModalRef}
                    modalContent={
                        <GalleryModalPage
                            images={roomData.categorizedImages}
                            onBackClick={handleGalleryModalClose}
                            selectedImageIndex={selectedImageIndex}
                        />
                    }
                />
            </IonContent>
        </IonPage>
    );
};

export default ImagesModalPage;
