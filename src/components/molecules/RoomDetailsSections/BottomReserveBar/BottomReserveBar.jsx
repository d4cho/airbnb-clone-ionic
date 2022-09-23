import React from 'react';
import { useAppContext } from '../../../../context/AppContext';
import Button from '../../../atoms/Button/Button';
import { AiFillStar } from 'react-icons/ai';
import './BottomReserveBar.scss';

const BottomReserveBar = (props) => {
    const { selectedTripDates } = useAppContext();
    const { roomData } = props;

    const reserveBtnStyle = {
        backgroundColor: '#FF385C',
        padding: '0.75rem 1.5rem',
        borderRadius: '7.5px',
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
    };

    if (!selectedTripDates || selectedTripDates.length < 2) {
        return (
            <div className='BottomReserveBar_container'>
                <div className='price_dates'>
                    <div className='text'>Add dates for prices</div>
                    <div className='rating'>
                        <AiFillStar /> {roomData.rating}
                    </div>
                </div>
                <div>
                    <Button
                        btnContent={
                            <>
                                <div>Check</div>
                                <div>availability</div>
                            </>
                        }
                        btnStyleOverride={reserveBtnStyle}
                        onButtonClick={() => alert('room reserved!')}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className='BottomReserveBar_container'>
            <div className='price_dates'>
                <div className='price'>
                    {`$${roomData.price} USD `}
                    <span className='night'>night</span>
                </div>
                <div className='dates'>{`${selectedTripDates[0]} to ${selectedTripDates[1]}`}</div>
            </div>
            <div>
                <Button
                    btnContent={'Reserve'}
                    btnStyleOverride={reserveBtnStyle}
                    onButtonClick={() => alert('room reserved!')}
                />
            </div>
        </div>
    );
};

export default BottomReserveBar;
