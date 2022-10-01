import React from 'react';
import './IconList.scss';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import Button from '../../../atoms/Button/Button';

const IconList = (props) => {
    const { heading, list, ctaText } = props;

    const btnStyle = {
        fontWeight: 'bold',
        border: '1px solid black',
        borderRadius: '10px',
        padding: '13px 23px',
    };

    return (
        <div className='IconList_container'>
            {heading && <div className='heading'>{heading}</div>}
            <IonGrid>
                {list.map((item, idx) => {
                    return (
                        <IonRow key={idx} className='row'>
                            <IonCol
                                className='ion-align-self-center'
                                size={1.5}
                            >
                                {item.icon}
                            </IonCol>
                            <IonCol className='ion-align-self-center'>
                                {item.text}
                            </IonCol>
                        </IonRow>
                    );
                })}
            </IonGrid>
            {ctaText && (
                <div className='button'>
                    <Button
                        btnContent={ctaText}
                        btnStyleOverride={btnStyle}
                        onButtonClick={() => alert('open AMENITIES modal')}
                    />
                </div>
            )}
        </div>
    );
};

export default IconList;
