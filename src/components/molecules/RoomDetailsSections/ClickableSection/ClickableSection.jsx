import React from 'react';
import './ClickableSection.scss';
import { FiChevronRight } from 'react-icons/fi';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

const ClickableSection = (props) => {
    const { heading, text, moreText, handleClick } = props;
    return (
        <IonGrid className='ClickableSection_container' onClick={handleClick}>
            <IonRow>
                <IonCol className='ion-align-self-center'>
                    <div className='heading'>{heading}</div>
                    <div className='text'>{text}</div>
                    {moreText && <div className='moreText'>{moreText}</div>}
                </IonCol>
                <IonCol className='ion-align-self-center' size='1'>
                    <FiChevronRight size={24} />
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default ClickableSection;
