import React from 'react';
import './TextInput.scss';

const TextInput = (props) => {
    const { icon } = props;

    return (
        <div className='TextInput_container'>
            {icon && <div className='input_icon'>{icon}</div>}
            <input
                type='text'
                placeholder='Search reviews'
                style={{ paddingLeft: icon ? '3rem' : '1rem' }}
            />
        </div>
    );
};

export default TextInput;
