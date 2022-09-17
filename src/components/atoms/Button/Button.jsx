import React from 'react';
import './Button.scss';

const Button = (props) => {
    const { btnContent, onButtonClick, btnStyleOverride, isDisabled } = props;

    return (
        <div
            className={`Button_container ${isDisabled ? 'disabled' : ''}`}
            onClick={isDisabled ? () => {} : onButtonClick}
            style={btnStyleOverride}
        >
            {btnContent}
        </div>
    );
};

export default Button;
