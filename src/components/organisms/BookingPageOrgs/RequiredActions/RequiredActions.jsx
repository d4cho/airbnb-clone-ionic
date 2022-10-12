import React from 'react';
import './RequiredActions.scss';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import Button from '../../../atoms/Button/Button';

const RequiredActions = () => {
    const btnStyle = {
        fontSize: '14px',
        padding: '7px 15px',
        color: '#222222',
        backgroundColor: '#FFF',
        border: '1px solid #222222',
        borderRadius: '10px',
    };

    return (
        <div className='RequiredActions_container'>
            <div className='RequiredActions_heading'>
                Required for your trip
            </div>
            <IonGrid className='ion-no-padding'>
                <IonRow className='RequiredActions_row'>
                    <IonCol className='RequiredActions_content'>
                        <div className='RequiredActions_title'>
                            Message the host
                        </div>
                        <div className='RequiredActions_text'>
                            Let the host know why you're traveling and when
                            you'll check in.
                        </div>
                    </IonCol>
                    <IonCol size={2}>
                        <Button
                            btnContent={'Add'}
                            btnStyleOverride={btnStyle}
                        />
                    </IonCol>
                </IonRow>
                <IonRow className='RequiredActions_row'>
                    <IonCol className='RequiredActions_content'>
                        <div className='RequiredActions_title'>
                            Profile photo
                        </div>
                        <div className='RequiredActions_text'>
                            Hosts want to know who's staying at their place.
                        </div>
                    </IonCol>
                    <IonCol size={2}>
                        <Button
                            btnContent={'Add'}
                            btnStyleOverride={btnStyle}
                        />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default RequiredActions;
