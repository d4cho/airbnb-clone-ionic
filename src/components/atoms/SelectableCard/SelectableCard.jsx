import React from 'react';
import './SelectableCard.scss';

const SelectableCard = (props) => {
    const { text, onCardClick, isSelected, icon } = props;

    return (
        <div
            className={`SelectableCard_container ${
                isSelected ? 'selected' : 'not-selected'
            }`}
            onClick={() => onCardClick(text)}
        >
            <div className='SelectableCard_icon'>{icon}</div>
            <div className='SelectableCard_text'>{text}</div>
        </div>
    );
};

export default SelectableCard;
