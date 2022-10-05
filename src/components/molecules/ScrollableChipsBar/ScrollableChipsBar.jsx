import React, { useState } from 'react';
import Chip from '../../atoms/Chip/Chip';
import './ScrollableChipsBar.scss';

const ScrollableChipsBar = (props) => {
    const { chipContentArr } = props;

    const [selectedChip, setSelectedChip] = useState(0);

    const handleChipClick = (index) => {
        setSelectedChip(index);
    };

    return (
        <div className='ScrollableChipsBar_container'>
            {chipContentArr.map((item, idx) => {
                return (
                    <div className='ScrollableChipsBar_chip' key={idx}>
                        <Chip
                            chipIndex={idx}
                            chipContent={item}
                            onChipSelect={handleChipClick}
                            isSelected={selectedChip === idx}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ScrollableChipsBar;
