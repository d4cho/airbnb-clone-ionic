import React from 'react';
import './Button.scss';

const Button = (props) => {
    const { btnContent, onButtonClick, btnStyleOverride, isDisabled } = props;

    return (
        <button
            className={`Button_container ${isDisabled ? 'disabled' : ''}`}
            onClick={isDisabled ? () => {} : onButtonClick}
            style={btnStyleOverride}
        >
            {btnContent}
        </button>
    );
};

export default Button;
