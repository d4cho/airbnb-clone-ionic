import React from 'react';
import './Checkbox.scss';
import { IonCheckbox, IonItem, IonLabel } from '@ionic/react';

const Checkbox = (props) => {
    const { labelText } = props;

    if (labelText) {
        return (
            <IonItem>
                <IonCheckbox slot='start'></IonCheckbox>
                <IonLabel>{labelText}</IonLabel>
            </IonItem>
        );
    }

    return <IonCheckbox></IonCheckbox>;
};
export default Checkbox;
