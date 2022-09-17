import React from 'react';
import './ChooseView.scss';
import { IonDatetime } from '@ionic/react';
import Button from '../../../../atoms/Button/Button';
import { useAppContext } from '../../../../../context/AppContext';

const PLUS_MINUS_DAYS = [
    'Exact dates',
    '1 day',
    '2 days',
    '3 days',
    '4 days',
    '5 days',
    '6 days',
    '7 days',
];

const ChooseView = () => {
    const { searchData, setSearchData } = useAppContext();
    const { startDate, endDate, plusMinusDays } = searchData.when.choose;

    const plusMinusDaysBtnStyle = {
        border: '1px solid #ebebeb',
        borderRadius: '25px',
        padding: '0.25rem 0.75rem',
        textAlign: 'center',
        fontSize: '14px',
        width: 'fit-content',
    };

    const handleButtonClick = (option) => {
        setSearchData({
            ...searchData,
            when: {
                ...searchData.when,
                choose: {
                    ...searchData.when.choose,
                    plusMinusDays: option,
                },
            },
        });
    };

    const updateSearchData = (dates) => {
        setSearchData({
            ...searchData,
            when: {
                ...searchData.when,
                choose: {
                    ...searchData.when.choose,
                    startDate: dates[0],
                    endDate: dates[1] ? dates[1] : '',
                },
            },
        });
    };

    return (
        <div className='ChooseView_container'>
            <IonDatetime
                presentation='date'
                multiple={true}
                onIonChange={(value) => updateSearchData(value.detail.value)}
            ></IonDatetime>
            <div className='scrollableButtons'>
                {PLUS_MINUS_DAYS.map((item, idx) => {
                    return (
                        <div
                            key={idx}
                            className={`button ${
                                plusMinusDays === item ? 'active' : ''
                            }`}
                        >
                            <Button
                                btnContent={
                                    idx === 0 ? item : <>&#177; {item}</>
                                }
                                btnStyleOverride={
                                    plusMinusDays === item
                                        ? {
                                              ...plusMinusDaysBtnStyle,
                                              border: '2px solid black',
                                              backgroundColor: '#ebebeb',
                                          }
                                        : plusMinusDaysBtnStyle
                                }
                                onButtonClick={() => handleButtonClick(item)}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ChooseView;
