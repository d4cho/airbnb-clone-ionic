import React from 'react';
import './ClickableSearchBar.scss';
import { BiSearch } from 'react-icons/bi';
import { BsToggles2 } from 'react-icons/bs';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';

const ClickableSearchBar = (props) => {
    const { handleSearchClick, handleFilterClick } = props;

    const handleSearchBarClick = () => {
        handleSearchClick();
    };

    const handleButtonClick = () => {
        handleFilterClick();
    };

    const filterBtnStyle = {
        border: '1px solid #dddddd',
        borderRadius: '50%',
        padding: '0.5rem',
        backgroundColor: '#FFF',
    };

    return (
        <div className='ClickableSearchBar_container'>
            <div className='search' onClick={handleSearchBarClick}>
                <div className='icon'>
                    <Icon iconContent={{ icon: <BiSearch />, text: '' }} />
                </div>
                <div className='text'>
                    <div className='where'>Where to?</div>
                    <div className='any'>Anywhere • Any week • Add guests</div>
                </div>
            </div>
            <div className='filter'>
                <Button
                    btnContent={<BsToggles2 />}
                    onButtonClick={handleButtonClick}
                    btnStyleOverride={filterBtnStyle}
                />
            </div>
        </div>
    );
};

export default ClickableSearchBar;
