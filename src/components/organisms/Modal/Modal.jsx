import React from 'react';
import { IonModal, IonContent } from '@ionic/react';

const Modal = (props) => {
    const {
        isModalOpen,
        setIsModalOpen,
        modalRef,
        modalContent,
        initialBreakpoint,
        breakpoints,
        showBackdrop,
        backdropDismiss,
        swipeToClose,
        backdropBreakpoint,
    } = props;

    if (initialBreakpoint && breakpoints.length > 0) {
        return (
            <IonModal
                isOpen={isModalOpen}
                ref={modalRef}
                initialBreakpoint={initialBreakpoint || undefined}
                breakpoints={breakpoints || undefined}
                showBackdrop={showBackdrop || false} // don't want to show gray backdrop
                backdropDismiss={backdropDismiss || false}
                swipeToClose={swipeToClose || false}
                // backdrop shows only after modal is fully opened. This allows interaction with elements behind modal
                backdropBreakpoint={backdropBreakpoint || undefined}
                // function to run when modal is closed by backdrop
                onIonModalDidDismiss={() =>
                    setIsModalOpen ? setIsModalOpen(false) : {}
                }
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
