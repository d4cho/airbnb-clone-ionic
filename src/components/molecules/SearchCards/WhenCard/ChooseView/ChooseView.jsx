import React, { useRef, useEffect } from 'react';
import './ChooseView.scss';
import { IonDatetime } from '@ionic/react';
import Button from '../../../../atoms/Button/Button';
import { useAppContext } from '../../../../../context/AppContext';
import { getDurationDates } from '../../../../../utils/functions/functions';

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
    const {
        searchData,
        setSearchData,
        selectedTripDates,
        setSelectedTripDates,
    } = useAppContext();
    const { plusMinusDays } = searchData.when.choose;

    useEffect(() => {
        if (!dateTimeRef.current) return;
        dateTimeRef.current.value = selectedTripDates;
    }, []);

    const plusMinusDaysBtnStyle = {
        border: '1px solid #ebebeb',
        borderRadius: '25px',
        padding: '0.25rem 0.75rem',
        textAlign: 'center',
        fontSize: '14px',
        width: 'fit-content',
    };

    const dateTimeRef = useRef();

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

    const handleDateChange = (dates) => {
        if (dates) {
            const latestDate = dates[dates.length - 1];
            const durationDates = getDurationDates(
                selectedTripDates,
                latestDate
            );
            setSelectedTripDates(durationDates);
            updateSearchData(durationDates);
            dateTimeRef.current.value = durationDates;
        } else {
            setSelectedTripDates([]);
        }
    };

    return (
        <div className='ChooseView_container'>
            <IonDatetime
                ref={dateTimeRef}
                presentation='date'
                multiple={true}
                onIonChange={(value) => handleDateChange(value.detail.value)}
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
