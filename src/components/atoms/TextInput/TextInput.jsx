import React, { useState, useEffect } from 'react';
import './TextInput.scss';
import { AiFillCloseCircle } from 'react-icons/ai';

const TextInput = (props) => {
    const { startAdornment, placeholderText, clearable, styleOverride, label } =
        props;

    const [textValue, setTextValue] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (!label) setPlaceholder(placeholderText || '');
    }, []);

    const textInputStyle = {
        ...styleOverride,
        ...(startAdornment && { paddingLeft: '48px' }),
        ...(label && { paddingTop: '24px', paddingBottom: '8px' }),
    };

    const handleFocus = () => {
        setPlaceholder(placeholderText || '');
        setIsFocused(true);
    };

    return (
        <div className='TextInput_container'>
            {startAdornment && (
                <div className='TextInput_startAdornment'>{startAdornment}</div>
            )}
            {label && (
                <div
                    className={`TextInput_label ${
                        isFocused && 'TextInput_isFocused'
                    }`}
                >
                    {label}
                </div>
            )}
            <input
                type='text'
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                placeholder={placeholder}
                style={textInputStyle}
                onFocus={handleFocus}
            />
            {clearable && textValue && (
                <div className='TextInput_endAdornment'>
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
