import React from 'react';
import './ReservationNote.scss';
import { BsCalendarCheck } from 'react-icons/bs';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

const ReservationNote = () => {
    return (
        <IonGrid className='ReservationNote_container ion-no-padding'>
            <IonRow>
                <IonCol size={2}>
                    <BsCalendarCheck size={28} />
                </IonCol>
                <IonCol>
                    <div className='ReservationNote_text'>
                        Your reservation won't be confirmed until the host
                        accepts your request (within 24 hours). You won't be
                        charged until then.
                    </div>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default ReservationNote;
