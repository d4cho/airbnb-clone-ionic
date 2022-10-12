import React from 'react';
import './PriceDetails.scss';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import Button from '../../../atoms/Button/Button';

const PriceDetails = () => {
    const btnStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
        textDecoration: 'underline',
        backgroundColor: '#FFF',
        padding: '0px',
    };

    return (
        <div className='PriceDetails_container'>
            <div className='PriceDetails_heading'>Price details</div>
            <IonGrid className='PriceDetails_grid ion-no-padding'>
                <IonRow className='PriceDetails_row'>
                    <IonCol
                        className='PriceDetails_col ion-align-self-center'
                        size={8}
                    >
                        $191.34 USD x 5 nights
                    </IonCol>
                    <IonCol className='PriceDetails_col ion-align-self-center PriceDetails_flex-end'>
                        $956.68 USD
                    </IonCol>
                </IonRow>
                <IonRow className='PriceDetails_row'>
                    <IonCol
                        className='PriceDetails_col ion-align-self-center'
                        size={8}
                    >
                        Cleaning free
                    </IonCol>
                    <IonCol className='PriceDetails_col ion-align-self-center PriceDetails_flex-end'>
                        $122.95 USD
                    </IonCol>
                </IonRow>
                <IonRow className='PriceDetails_row'>
                    <IonCol
                        className='PriceDetails_col ion-align-self-center'
                        size={8}
                    >
                        Service fee
                    </IonCol>
                    <IonCol className='PriceDetails_col ion-align-self-center PriceDetails_flex-end'>
                        $172.23 USD
                    </IonCol>
                </IonRow>
                <IonRow className='PriceDetails_row PriceDetails_bold'>
                    <IonCol
                        className='PriceDetails_col ion-align-self-center'
                        size={8}
                    >
                        Total (<span>USD</span>)
                    </IonCol>
                    <IonCol className='PriceDetails_col ion-align-self-center PriceDetails_flex-end'>
                        $1,251.86
                    </IonCol>
                </IonRow>
                <IonRow className='PriceDetails_row'>
                    <IonCol className='PriceDetails_col ion-align-self-center PriceDetails_flex-end'>
                        <Button
                            btnContent={'More info'}
                            btnStyleOverride={btnStyle}
                        />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default PriceDetails;
