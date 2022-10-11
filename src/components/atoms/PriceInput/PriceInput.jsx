import React from 'react';
import './PriceInput.scss';

const PriceInput = (props) => {
    const { startAdornment, label, value, setValue } = props;

    const handleChange = (e) => {
        let newValue = e.target.value;
        setValue(newValue);
    };

    const handleBlur = () => {
        if (parseInt(value) < 10) {
            setValue('10');
        }

        if (parseInt(value) >= 1000) {
            setValue('1000+');
        }
    };

    return (
        <div className='PriceInput_container'>
            {label && <div className='PriceInput_label'>{label}</div>}
            {startAdornment && (
                <div className='PriceInput_startAdornment'>
                    {startAdornment}
                </div>
            )}
            <input
                className={`${startAdornment ? 'pad-l-28' : ''} ${
                    label ? 'pad-t-24' : ''
                }`}
                type='text'
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </div>
    );
};

export default PriceInput;
