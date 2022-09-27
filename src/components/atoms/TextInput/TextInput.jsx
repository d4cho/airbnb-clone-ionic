import React, { useState } from 'react';
import './TextInput.scss';
import { AiFillCloseCircle } from 'react-icons/ai';

const TextInput = (props) => {
    const { icon } = props;
    const [textValue, setTextValue] = useState('');

    return (
        <div className='TextInput_container'>
            {icon && <div className='input_icon'>{icon}</div>}
            <input
                type='text'
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                placeholder='Search reviews'
                style={{ paddingLeft: icon ? '3rem' : '1rem' }}
            />
            {textValue && (
                <div className='clear_icon'>
                    <AiFillCloseCircle
                        size={26}
                        onClick={() => setTextValue('')}
                    />
                </div>
            )}
        </div>
    );
};

export default TextInput;
