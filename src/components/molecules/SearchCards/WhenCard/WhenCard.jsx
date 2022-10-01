import React from 'react';
import { useAppContext } from '../../../../context/AppContext';
import Button from '../../../atoms/Button/Button';
import TwoButton from '../../../atoms/TwoButton/TwoButton';
import ChooseView from './ChooseView/ChooseView';
import FlexibleView from './FlexibleView/FlexibleView';
import './WhenCard.scss';

const WhenCard = (props) => {
    const { setSelectedCard } = props;
    const { searchData, setSearchData } = useAppContext();
    const { when } = searchData;
    const { dateType } = when;

    const updateSearchData = (option) => {
        setSearchData({
            ...searchData,
            when: {
                ...searchData.when,
                dateType: option === 'first' ? 'choose' : 'flexible',
            },
        });
    };

    const clearBtnSyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
    };

    const nextBtnStyle = {
        color: '#FFF',
        fontWeight: 'bold',
        backgroundColor: '#000',
        padding: '0.75rem 1.5rem',
        borderRadius: '10px',
    };

    return (
        <div className='WhenCard_container'>
            <div className='title'>When's your trip?</div>
            <div>
                <TwoButton
                    refreshFunction={updateSearchData}
                    defaultOption={dateType === 'choose' ? 'first' : 'second'}
                />
            </div>
            {dateType === 'choose' ? <ChooseView /> : <FlexibleView />}
            <div className='buttons'>
                <Button
                    btnContent={<div>Clear</div>}
                    btnStyleOverride={clearBtnSyle}
                />
                <Button
                    btnContent={<div>Next</div>}
                    btnStyleOverride={nextBtnStyle}
                    onButtonClick={() => setSelectedCard('Who')}
                />
            </div>
        </div>
    );
};

export default WhenCard;
