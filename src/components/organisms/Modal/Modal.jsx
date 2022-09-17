import React from 'react';
import {
    IonHeader,
    IonButtons,
    IonButton,
    IonModal,
    IonToolbar,
    IonTitle,
    IonItem,
    IonContent,
} from '@ionic/react';

const Modal = (props) => {
    const { isModalOpen, handleModalClose, modalRef, modalContent } = props;

    return (
        <IonModal isOpen={isModalOpen} ref={modalRef}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonButton onClick={handleModalClose}>Cancel</IonButton>
                    </IonButtons>
                    <IonTitle>Welcome</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                <IonItem>{modalContent}</IonItem>
            </IonContent>
        </IonModal>
    );
};

export default Modal;
