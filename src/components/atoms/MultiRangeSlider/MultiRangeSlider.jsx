import React, { useState, useEffect } from 'react';
import './MultiRangeSlider.scss';
import { FaGripLinesVertical } from 'react-icons/fa';

const MultiRangeSlider = (props) => {
    const {
        initialMin,
        initialMax,
        getMinValue,
        getMaxValue,
        minDisabled,
        maxDisabled,
    } = props;
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);

    useEffect(() => {
        if (initialMin) {
            setMinValue(initialMin);
        }

        if (initialMax) {
            setMaxValue(initialMax);
        }
    }, [initialMin, initialMax]);

    const handleMinChange = (e) => {
        setMinValue(e.target.value);
        getMinValue(e.target.value);
    };

    const handleMaxChange = (e) => {
        setMaxValue(e.target.value);
        getMaxValue(e.target.value);
    };

    return (
        <div className='MultiRangeSlider_container'>
            <input
                type='range'
                id='input-left'
                min='0'
                max='100'
                value={minValue}
                onChange={handleMinChange}
                disabled={minDisabled}
            />
            <input
                type='range'
                id='input-right'
                min='0'
                max='100'
                value={maxValue}
                onChange={handleMaxChange}
                disabled={maxDisabled}
            />

            <div className='MultiRangeSlider_slider'>
                <div className='MultiRangeSlider_track' />
                <div
                    className='MultiRangeSlider_thumb_left'
                    style={{ left: `${minValue}%` }}
                >
                    <FaGripLinesVertical />
                </div>
                <div
                    className='MultiRangeSlider_thumb_right'
                    style={{ right: `${100 - maxValue}%` }}
                >
                    <FaGripLinesVertical />
                </div>
            </div>
        </div>
    );
};

export default MultiRangeSlider;
