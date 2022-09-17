import React from 'react';
import './Icon.scss';

const Icon = (props) => {
    const {
        iconContent,
        isSelected,
        iconOverrideColor,
        iconOverrideSize,
        iconBottomPadding,
        textOverrideColor,
        textOverrideSize,
    } = props;
    const { icon, text } = iconContent;

    return (
        <div className={`Icon_container ${!isSelected ? 'notSelected' : ''}`}>
            <div
                style={{
                    color: iconOverrideColor ? iconOverrideColor : '',
                    fontSize: iconOverrideSize ? iconOverrideSize : '',
                    paddingBottom: iconBottomPadding ? iconBottomPadding : '',
                }}
            >
                {icon}
            </div>
            {text && (
                <span
                    className='text'
                    style={{
                        color: textOverrideColor ? textOverrideColor : '',
                        fontSize: textOverrideSize ? textOverrideSize : '',
                    }}
                >
                    {text}
                </span>
            )}
        </div>
    );
};

export default Icon;
