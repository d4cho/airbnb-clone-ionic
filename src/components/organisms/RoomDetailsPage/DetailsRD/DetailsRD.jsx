import React from 'react';
import './DetailsRD.scss';
import { AiFillStar } from 'react-icons/ai';
import { BiMedal } from 'react-icons/bi';
import { GiCutDiamond } from 'react-icons/gi';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';

const DetailsRD = (props) => {
    const { roomData } = props;
    const {
        user,
        type,
        title,
        rating,
        reviews,
        superHost,
        location,
        rare,
        guests,
        rooms,
        selfCheckIn,
        airCover,
        desc,
    } = roomData;

    return (
        <div className='DetailsRD_container'>
            <div className='content'>
                <div className='title'>{title}</div>
                <div className='extra'>
                    <span>
                        <AiFillStar /> {rating}
                    </span>
                    <span>&nbsp;•&nbsp;</span>
                    <span className='reviews'>{reviews} reviews</span>
                    <span>&nbsp;•&nbsp;</span>
                    {superHost && (
                        <span>
                            <BiMedal />
                            &nbsp; Superhost
                        </span>
                    )}
                    <span>&nbsp;•&nbsp;</span>
                </div>
                <div className='location'>{location}</div>
            </div>
            <div className='line'></div>
            <div className='content'>
                <IonGrid>
                    <IonRow>
                        <IonCol className='ion-align-self-center' size='10'>
                            <b>This is a rare find.</b> {user}'s place on Airbnb
                            is usually fully booked.
                        </IonCol>
                        <IonCol className='ion-align-self-center flex-end'>
                            <GiCutDiamond size={35} color='#ff5a5f' />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </div>
            <div className='line'></div>
            <div className='content'>
                <IonGrid>
                    <IonRow>
                        <IonCol className='ion-align-self-center' size='7'>
                            <div className='roomsAvailability'>
                                Entire {type} hosted by {user}
                            </div>
                        </IonCol>
                        <IonCol className='ion-align-self-center flex-end'>
                            <GiCutDiamond size={35} color='#ff5a5f' />
                        </IonCol>
                    </IonRow>
                    <div className='roomsInfo'>
                        {guests} guests • {rooms.bedrooms} bedrooms •{' '}
                        {rooms.beds} beds • {rooms.bath} bath
                    </div>
                </IonGrid>
            </div>
            <div className='line'></div>
            <div className='content'>perks</div>
            <div className='line'></div>
            <div className='content'>aircover</div>
            <div className='line'></div>
            <div className='content'>desc</div>
            <div className='line'></div>
            <div className='content'>Where you'll sleep</div>
        </div>
    );
};

export default DetailsRD;
