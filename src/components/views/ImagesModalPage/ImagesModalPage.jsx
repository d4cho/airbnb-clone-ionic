import React from 'react';
import './ImagesModalPage.scss';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import { FiChevronLeft, FiShare } from 'react-icons/fi';

const ImagesModalPage = (props) => {
    const { handleModalClose } = props;

    return (
        <IonPage className='ImagesModalPage_container'>
            <IonHeader className='ImagesModalPage_header'>
                <FiChevronLeft size={28} onClick={handleModalClose} />
                <FiShare size={20} onClick={() => alert('share clicked')} />
            </IonHeader>
            <IonContent className='ImagesModalPage_content'>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
                <h1>images modal page</h1>
            </IonContent>
        </IonPage>
    );
};

export default ImagesModalPage;
