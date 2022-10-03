import React from 'react';
import './TypeOfPlace.scss';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import Checkbox from '../../../atoms/Checkox/Checkbox';

const TypeOfPlace = () => {
    return (
        <div className='TypeOfPlace_container'>
            <div className='TypeOfPlace_heading'>Type of place</div>
            <div>
                <IonGrid className='ion-no-padding'>
                    <IonRow>
                        <IonCol>
                            <div className='TypeOfPlace_text'>Entire place</div>
                            <div className='TypeOfPlace_subtext'>
                                A place all to yourself
                            </div>
                        </IonCol>
                        <IonCol size={1}>
                            <Checkbox />
                        </IonCol>
                    </IonRow>

                    <IonRow className='pad-t-24'>
                        <IonCol>
                            <div className='TypeOfPlace_text'>Private room</div>
                            <div className='TypeOfPlace_subtext'>
                                Your own room in a home or a hotel, plus some
                                shared common spaces
                            </div>
                        </IonCol>
                        <IonCol size={1}>
                            <Checkbox />
                        </IonCol>
                    </IonRow>

                    <IonRow className='pad-t-24'>
                        <IonCol>
                            <div className='TypeOfPlace_text'>Shared room</div>
                            <div className='TypeOfPlace_subtext'>
                                A sleeping space and common areas that may be
                                shared with others
                            </div>
                        </IonCol>
                        <IonCol size={1}>
                            <Checkbox />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </div>
        </div>
    );
};

export default TypeOfPlace;
