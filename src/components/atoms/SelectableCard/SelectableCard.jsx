import React, { useState } from 'react';
import './SelectableCard.scss';

const SelectableCard = (props) => {
    const { text, icon } = props;
    const [isSelected, setIsSelected] = useState(false);

    const handleCardClick = () => {
        setIsSelected(!isSelected);
    };

    return (
        <div
            className={`SelectableCard_container ${
                isSelected ? 'selected' : 'not-selected'
            }`}
            onClick={handleCardClick}
        >
            <div className='SelectableCard_icon'>{icon}</div>
            <div className='SelectableCard_text'>{text}</div>
        </div>
    );
};

export default SelectableCard;
