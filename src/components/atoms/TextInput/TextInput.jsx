import React, { useState, useEffect } from 'react';
import './TextInput.scss';
import { AiFillCloseCircle } from 'react-icons/ai';
import { isValid } from '../../../utils/functions/functions';

const STRONG_PASSWORD_REGEX =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})';
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const TextInput = (props) => {
    const {
        startAdornment,
        placeholderText,
        clearable,
        styleOverride,
        label,
        isRequired,
        maxLength,
        isPassword,
        isEmail,
    } = props;

    const [value, setValue] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const [wasTouched, setWasTouched] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (!label) setPlaceholder(placeholderText || '');
    }, []);

    const textInputStyle = {
        ...styleOverride,
        ...(startAdornment && { paddingLeft: '48px' }),
        ...(label && { paddingTop: '24px', paddingBottom: '8px' }),
        ...(hasError && { border: '1px solid red' }),
    };

    const handleTouched = () => {
        setPlaceholder(placeholderText || '');
        setWasTouched(true);
    };

    const handleOnBlur = (e) => {
        // required error is shown on blur
        if (isRequired && !value) {
            setHasError(true);
        }

        if (isPassword) {
            setHasError(!isValid(STRONG_PASSWORD_REGEX, value));
        }

        if (isEmail) {
            setHasError(!isValid(EMAIL_REGEX, value));
        }
    };

    const handleChange = (e) => {
        // stop if max length reached
        if (maxLength > 0 && e.target.value.length > maxLength) {
            return;
        }

        // required error is removed on value change
        if (value.length > 0 && isRequired && hasError) {
            setHasError(false);
        }

        setValue(e.target.value);
    };

    const getInputType = () => {
        if (isPassword) return 'password';
        if (isEmail) return 'email';

        return 'text';
    };

    return (
        <div className='TextInput_container'>
            {startAdornment && (
                <div className='TextInput_startAdornment'>{startAdornment}</div>
            )}
            {label && (
                <div
                    className={`TextInput_label ${
                        wasTouched && 'TextInput_wasTouched'
                    } ${hasError && 'TextInput_error'}`}
                >
                    {label}
                </div>
            )}
            <input
                type={getInputType()}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                style={textInputStyle}
                onTouchStart={handleTouched}
                onBlur={handleOnBlur}
            />
            {clearable && value && (
                <div className='TextInput_endAdornment'>
                    <AiFillCloseCircle size={26} onClick={() => setValue('')} />
                </div>
            )}
        </div>
    );
};

export default TextInput;
