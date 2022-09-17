import React, { useMemo } from 'react';
import './Button.scss';

const Button = (props) => {
    const {
        btnContent,
        btnOptions,
        onButtonClick,
        btnStyleOverride,
        isDisabled,
    } = props;

    const btnClasses = [''];
    useMemo(() => {
        if (btnOptions?.hasBorder) {
            btnClasses.push('border');
        }
        if (btnOptions?.hasPadding) {
            btnClasses.push('padding');
        }
    }, [btnOptions]);

    return (
        <div
            className={`Button_container ${isDisabled ? 'disabled' : ''}`}
            onClick={isDisabled ? () => {} : onButtonClick}
        >
            <div className={btnClasses.join(' ')} style={btnStyleOverride}>
                {btnContent}
            </div>
        </div>
    );
};

export default Button;
