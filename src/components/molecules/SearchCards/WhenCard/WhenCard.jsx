import React from 'react';
import { useAppContext } from '../../../../context/AppContext';
import TwoButton from '../../../atoms/TwoButton/TwoButton';
import ChooseView from './ChooseView/ChooseView';
import FlexibleView from './FlexibleView/FlexibleView';
import './WhenCard.scss';

const WhenCard = () => {
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
        </div>
    );
};

export default WhenCard;
