import React from 'react';
import './ScrollableSelectionBar.scss';
import Icon from '../../atoms/Icon/Icon';
import { selectionItems } from '../../../assets/data/selection-items-data';

const ScrollableSelectionBar = (props) => {
    const { selectedTab, setSelectedTab } = props;

    const handleTabClick = (idx) => {
        setSelectedTab(idx);
    };

    return (
        <div className='ScrollableSelectionBar_container'>
            {selectionItems.map((item, idx) => {
                const isSelected = selectedTab === idx;

                return (
                    <div
                        className='item'
                        key={idx}
                        onClick={() => handleTabClick(idx)}
                    >
                        <Icon
                            iconContent={item}
                            isSelected={isSelected}
                            iconOverrideSize={'24px'}
                        />
                        {selectedTab === idx && <div className='underline' />}
                    </div>
                );
            })}
        </div>
    );
};

export default ScrollableSelectionBar;
