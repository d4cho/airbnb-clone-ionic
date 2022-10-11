import React from 'react';
import './Toggle.scss';
import { IonToggle } from '@ionic/react';

const Toggle = (props) => {
    const { color } = props;

    return (
        <div className='Toggle_container'>
            <IonToggle color={color || 'primary'} />
        </div>
    );
};

export default Toggle;
