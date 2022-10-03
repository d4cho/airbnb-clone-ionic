import React from 'react';
import './CheckboxList.scss';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import Checkbox from '../../../atoms/Checkox/Checkbox';

const CheckboxList = (props) => {
    const { headingText, subheadingText, checkboxItems } = props;

    return (
        <div className='CheckboxList_container'>
            {headingText && (
                <div className='CheckboxList_heading'>{headingText}</div>
            )}
            {subheadingText && (
                <div className='CheckboxList_subheading'>{subheadingText}</div>
            )}
            <div>
                <IonGrid className='ion-no-padding'>
                    {checkboxItems.map((item, idx) => {
                        return (
                            <IonRow className='pad-12'>
                                <IonCol>
                                    <div className='CheckboxList_text'>
                                        {item.text}
                                    </div>
                                    <div className='CheckboxList_subtext'>
                                        {item.subtext}
                                    </div>
                                </IonCol>
                                <IonCol size={1}>
                                    <Checkbox />
                                </IonCol>
                            </IonRow>
                        );
                    })}
                </IonGrid>
            </div>
        </div>
    );
};

export default CheckboxList;
