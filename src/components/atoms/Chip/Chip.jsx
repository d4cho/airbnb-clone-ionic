import React from 'react';
import './Chip.scss';

const Chip = (props) => {
    const { chipIndex, chipContent, onChipSelect, isSelected } = props;

    return (
        <div
            className={`Chip_container ${isSelected ? 'Chip_selected' : ''}`}
            onClick={() => onChipSelect(chipIndex)}
        >
            {chipContent}
        </div>
    );
};

export default Chip;
