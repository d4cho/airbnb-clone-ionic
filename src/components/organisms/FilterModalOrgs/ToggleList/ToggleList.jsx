import React from 'react';
import './ToggleList.scss';
import { IonGrid, IonRow, IonCol, IonToggle } from '@ionic/react';

const ToggleList = (props) => {
    const { headingText, toggleListData } = props;

    return (
        <div className='ToggleList_container'>
            <div className='ToggleList_heading'>{headingText}</div>
            <IonGrid className='ion-no-padding'>
                {toggleListData.map((item, idx) => {
                    return (
                        <IonRow class='pad-12' key={idx}>
                            <IonCol>
                                <div className='ToggleList_optionTitle'>
                                    {item.title}
                                </div>
                                <div className='ToggleList_optionDesc'>
                                    {item.desc}
                                </div>
                            </IonCol>
                            <IonCol size={1} />
                            <IonCol className='ion-align-self-center' size={2}>
                                <div>
                                    <IonToggle color='dark' />
                                </div>
                            </IonCol>
                        </IonRow>
                    );
                })}
            </IonGrid>
        </div>
    );
};

export default ToggleList;
