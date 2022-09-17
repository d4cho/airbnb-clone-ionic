import React from 'react';
import { useAppContext } from '../../../../../context/AppContext';
import Button from '../../../../atoms/Button/Button';
import './FlexibleView.scss';
import { BsCalendar2, BsCalendar2Check } from 'react-icons/bs';
import { flexibleMonthsData } from '../../../../../assets/data/flexible-months-data';

const FlexibleView = () => {
    const { searchData, setSearchData } = useAppContext();
    const { when } = searchData;
    const { flexible } = when;
    const { stayDuration, whenMonthYear } = flexible;

    const stayDurationBtnStyle = {
        border: '1px solid #ebebeb',
        borderRadius: '25px',
        padding: '0.25rem 0.75rem',
        textAlign: 'center',
        fontSize: '14px',
    };

    const monthYearBtnStyle = {
        border: '1px solid #ebebeb',
        borderRadius: '15px',
        padding: '0.75rem 0.75rem 0.25rem',
        textAlign: 'center',
        fontSize: '14px',
        marginRight: '0.5rem',
        width: '6.5rem',
    };

    const updateSearchData = (duration, monthYear) => {
        if (duration) {
            setSearchData({
                ...searchData,
                when: {
                    ...searchData.when,
                    flexible: {
                        ...searchData.when.flexible,
                        stayDuration: duration,
                    },
                },
            });
        }

        if (monthYear) {
            let monthYearArr = [...searchData.when.flexible.whenMonthYear];

            // remove monthYear if already there
            if (monthYearArr.includes(monthYear)) {
                monthYearArr = monthYearArr.filter(
                    (item) => item !== monthYear
                );
            } else {
                monthYearArr.push(monthYear);
            }

            setSearchData({
                ...searchData,
                when: {
                    ...searchData.when,
                    flexible: {
                        ...searchData.when.flexible,
                        whenMonthYear: monthYearArr,
                    },
                },
            });
        }
    };

    return (
        <div className='FlexibleView_container'>
            <div className='section'>
                <div>How long would you like to stay?</div>
                <div className='buttons'>
                    <div className={stayDuration === 'weekend' ? 'active' : ''}>
                        <Button
                            btnContent={'Weekend'}
                            btnStyleOverride={
                                stayDuration === 'weekend'
                                    ? {
                                          ...stayDurationBtnStyle,
                                          border: '2px solid black',
                                          backgroundColor: '#ebebeb',
                                      }
                                    : stayDurationBtnStyle
                            }
                            onButtonClick={() =>
                                updateSearchData('weekend', null)
                            }
                        />
                    </div>
                    <div className={stayDuration === 'week' ? 'active' : ''}>
                        <Button
                            btnContent={'Week'}
                            btnStyleOverride={
                                stayDuration === 'week'
                                    ? {
                                          ...stayDurationBtnStyle,
                                          border: '2px solid black',
                                          backgroundColor: '#ebebeb',
                                      }
                                    : stayDurationBtnStyle
                            }
                            onButtonClick={() => updateSearchData('week', null)}
                        />
                    </div>
                    <div className={stayDuration === 'month' ? 'active' : ''}>
                        <Button
                            btnContent={'Month'}
                            btnStyleOverride={
                                stayDuration === 'month'
                                    ? {
                                          ...stayDurationBtnStyle,
                                          border: '2px solid black',
                                          backgroundColor: '#ebebeb',
                                      }
                                    : stayDurationBtnStyle
                            }
                            onButtonClick={() =>
                                updateSearchData('month', null)
                            }
                        />
                    </div>
                </div>
            </div>
            <div className='section'>
                <div>When do you want to go?</div>
            </div>
            <div className='scrollableButtons'>
                {flexibleMonthsData.map((item, idx) => {
                    return (
                        <div
                            className={
                                whenMonthYear.includes(
                                    `${item.month}${item.year}`
                                )
                                    ? 'active'
                                    : ''
                            }
                            key={idx}
                        >
                            <Button
                                btnContent={
                                    <div className='calendar'>
                                        {whenMonthYear.includes(
                                            `${item.month}${item.year}`
                                        ) ? (
                                            <BsCalendar2Check
                                                style={{ fontSize: '28px' }}
                                            />
                                        ) : (
                                            <BsCalendar2
                                                style={{ fontSize: '28px' }}
                                            />
                                        )}

                                        <div className='month'>
                                            {item.month}
                                        </div>
                                        <div>{item.year}</div>
                                    </div>
                                }
                                btnStyleOverride={
                                    whenMonthYear.includes(
                                        `${item.month}${item.year}`
                                    )
                                        ? {
                                              ...monthYearBtnStyle,
                                              border: '2px solid black',
                                              backgroundColor: '#ebebeb',
                                          }
                                        : monthYearBtnStyle
                                }
                                onButtonClick={() =>
                                    updateSearchData(
                                        null,
                                        `${item.month}${item.year}`
                                    )
                                }
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FlexibleView;
