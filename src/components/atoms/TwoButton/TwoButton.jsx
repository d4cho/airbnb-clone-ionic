import React, { useState } from 'react';
import './Twobutton.scss';

const TwoButton = (props) => {
    const { refreshFunction, defaultOption } = props;
    const [activeButton, setActiveButton] = useState(defaultOption);

    const handleButtonClick = (option) => {
        setActiveButton(option);
        refreshFunction(option);
    };

    return (
        <div className='TwoButton_container'>
            <div
                className={`button ${activeButton === 'first' ? 'active' : ''}`}
                onClick={() => handleButtonClick('first')}
            >
                Choose dates
            </div>
            <div
                className={`button ${
                    activeButton === 'second' ? 'active' : ''
                }`}
                onClick={() => handleButtonClick('second')}
            >
                I'm flexible
            </div>
        </div>
    );
};

export default TwoButton;
