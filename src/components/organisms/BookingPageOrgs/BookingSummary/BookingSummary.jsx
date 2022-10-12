import React from 'react';
import './BookingSummary.scss';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { AiFillStar } from 'react-icons/ai';
import { BiMedal } from 'react-icons/bi';

const BookingSummary = (props) => {
    const { roomData } = props;
    const imageUrl = roomData.images[0].url;
    const { rating, reviews, superHost } = roomData;

    console.log(imageUrl);

    return (
        <div className='BookingSummary_container'>
            <IonGrid className='BookingSummary_grid ion-no-padding'>
                <IonRow className='BookingSummary_row'>
                    <IonCol size={'auto'}>
                        <div
                            className='BookingSummary_image'
                            style={{
                                '--imageUrl': `url(${imageUrl})`,
                            }}
                        />
                    </IonCol>
                    <IonCol className='BookingSummary_content'>
                        <div>
                            <div className='BookingSummary_category'>
                                Tiny homes
                            </div>
                            <div className='BookingSummary_title'>
                                Four Pines Cabin
                            </div>
                        </div>
                        <div className='BookingSummary_ratings'>
                            <span>
                                <AiFillStar /> {rating} ({reviews})
                            </span>
                            <span>&nbsp;•&nbsp;</span>
                            {superHost && (
                                <span>
                                    <BiMedal />
                                    &nbsp; Superhost
                                </span>
                            )}
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <div className='BookingSummary_divider' />
            <div className='BookingSummary_aircover'>
                Your booking is protected by{' '}
                <span className='BookingSummary_air'>air</span>
                <span className='BookingSummary_cover'>cover</span>
            </div>
        </div>
    );
};

export default BookingSummary;
