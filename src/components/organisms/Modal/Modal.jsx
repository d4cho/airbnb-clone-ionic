import React from 'react';
import { IonModal, IonContent } from '@ionic/react';

const Modal = (props) => {
    const {
        isModalOpen,
        modalRef,
        modalContent,
        initialBreakpoint,
        breakpoints,
    } = props;

    // const handleModalDismissed = () => {
    //     console.log('modal dismissed');
    // };

    if (initialBreakpoint && breakpoints.length > 0) {
        return (
            <IonModal
                isOpen={isModalOpen}
                ref={modalRef}
                initialBreakpoint={initialBreakpoint}
                breakpoints={breakpoints}
                showBackdrop={false} // don't want to show gray backdrop
                backdropDismiss={false}
                swipeToClose={false}
                // backdrop shows only after modal is fully opened. This allows interaction with elements behind modal
                backdropBreakpoint={1}
                // onDidDismiss={() => handleModalDismissed()}
            >
                <IonContent>{modalContent}</IonContent>
            </IonModal>
        );
    }

    return (
        <IonModal isOpen={isModalOpen} ref={modalRef}>
            <IonContent>{modalContent}</IonContent>
        </IonModal>
    );
};

export default Modal;
