import React from 'react';
import { IonModal, IonContent } from '@ionic/react';

const Modal = (props) => {
    const { isModalOpen, modalRef, modalContent } = props;

    return (
        <IonModal isOpen={isModalOpen} ref={modalRef}>
            <IonContent>{modalContent}</IonContent>
        </IonModal>
    );
};

export default Modal;
