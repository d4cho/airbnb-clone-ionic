import React from 'react';
import './ImagesGridLayout.scss';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

const ImagesGridLayout = (props) => {
    const { images, onImageClick } = props;

    const gridifyImages = (imagesArr) => {
        let imagesGrid = [];

        if (imagesArr.length === 2) {
            for (let i = 0; i < imagesArr.length; i++) {
                imagesGrid.push(
                    <IonGrid className='ion-no-padding'>
                        {imagesArr[i] && imagesArr[i + 1] && (
                            <IonRow>
                                <IonCol className='pad-r-2'>
                                    <img
                                        className='side_by_side_img'
                                        src={imagesArr[i].url}
                                        alt={imagesArr[i].category + i}
                                        onClick={() =>
                                            onImageClick(imagesArr[i].url)
                                        }
                                    />
                                </IonCol>
                                <IonCol className='pad-l-2'>
                                    <img
                                        className='side_by_side_img'
                                        src={imagesArr[i + 1].url}
                                        alt={imagesArr[i + 1].category + i + 1}
                                        onClick={() =>
                                            onImageClick(imagesArr[i + 1].url)
                                        }
                                    />
                                </IonCol>
                            </IonRow>
                        )}
                    </IonGrid>
                );
            }
        } else {
            for (let i = 0; i < imagesArr.length; i = i + 3) {
                imagesGrid.push(
                    <IonGrid className='ion-no-padding'>
                        {imagesArr[i] && (
                            <IonRow className=''>
                                <IonCol className=''>
                                    <img
                                        className='single_img'
                                        src={imagesArr[i].url}
                                        alt={imagesArr[i].category + i}
                                        onClick={() =>
                                            onImageClick(imagesArr[i].url)
                                        }
                                    />
                                </IonCol>
                            </IonRow>
                        )}
                        {imagesArr[i + 1] && imagesArr[i + 2] && (
                            <IonRow>
                                <IonCol className='pad-r-2'>
                                    <img
                                        className='side_by_side_img'
                                        src={imagesArr[i + 1].url}
                                        alt={imagesArr[i + 1].category + i + 1}
                                        onClick={() =>
                                            onImageClick(imagesArr[i + 1].url)
                                        }
                                    />
                                </IonCol>
                                <IonCol className='pad-l-2'>
                                    <img
                                        className='side_by_side_img'
                                        src={imagesArr[i + 2].url}
                                        alt={imagesArr[i + 2].category + i + 2}
                                        onClick={() =>
                                            onImageClick(imagesArr[i + 2].url)
                                        }
                                    />
                                </IonCol>
                            </IonRow>
                        )}
                    </IonGrid>
                );
            }
        }

        return imagesGrid;
    };

    return (
        <div className='ImagesGridLayout_container'>
            {gridifyImages(images).map((item, idx) => {
                return <React.Fragment key={idx}>{item}</React.Fragment>;
            })}
        </div>
    );
};

export default ImagesGridLayout;
