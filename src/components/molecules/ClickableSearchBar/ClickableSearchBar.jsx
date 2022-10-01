import React from 'react';
import './ClickableSearchBar.scss';
import Button from '../../atoms/Button/Button';

const ClickableSearchBar = (props) => {
    const {
        mainText,
        subText,
        onTextClick,
        leftIcon,
        onLeftIconClick,
        rightIcon,
        onRightIconClick,
    } = props;

    const handleTextClick = () => {
        onTextClick();
    };

    const handleLeftIconClick = () => {
        onLeftIconClick();
    };

    const handleRightIconClick = () => {
        onRightIconClick();
    };

    const filterBtnStyle = {
        border: '1px solid #dddddd',
        borderRadius: '50%',
        padding: '0.5rem',
        backgroundColor: '#FFF',
    };

    return (
        <div className='ClickableSearchBar_container'>
            <div className='search'>
                <div className='icon' onClick={handleLeftIconClick}>
                    {leftIcon && leftIcon}
                </div>
                <div className='text' onClick={handleTextClick}>
                    <div className='where'>{mainText}</div>
                    <div className='any'>{subText}</div>
                </div>
            </div>
            <div className='filter'>
                <Button
                    btnContent={rightIcon}
                    onButtonClick={handleRightIconClick}
                    btnStyleOverride={filterBtnStyle}
                />
            </div>
        </div>
    );
};

export default ClickableSearchBar;
