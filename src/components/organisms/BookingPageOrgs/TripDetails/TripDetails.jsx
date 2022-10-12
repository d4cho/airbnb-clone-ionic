import React from 'react';
import './TripDetails.scss';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import Button from '../../../atoms/Button/Button';

const TripDetails = () => {
    const btnStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#222222',
        backgroundColor: '#FFF',
        padding: '0px',
    };
    return (
        <div className='TripDetails_container'>
            <div className='TripDetails_heading'>Your trip</div>
            <IonGrid className='ion-no-padding'>
                <IonRow className='TripDetails_row'>
                    <IonCol className='TripDetails_content'>
                        <div className='TripDetails_title'>Dates</div>
                        <div className='TripDetails_text'>
                            May 14 - 19, 2023
                        </div>
                    </IonCol>
                    <IonCol size={1}>
                        <Button
                            btnContent={'Edit'}
                            btnStyleOverride={btnStyle}
                        />
                    </IonCol>
                </IonRow>
                <IonRow className='TripDetails_row'>
                    <IonCol className='TripDetails_content'>
                        <div className='TripDetails_title'>Guests</div>
                        <div className='TripDetails_text'>1 guest</div>
                    </IonCol>
                    <IonCol size={1}>
                        <Button
                            btnContent={'Edit'}
                            btnStyleOverride={btnStyle}
                        />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default TripDetails;
