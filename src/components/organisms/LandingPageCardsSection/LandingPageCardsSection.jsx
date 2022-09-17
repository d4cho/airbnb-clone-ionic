import React from 'react';
import RoomsCards from '../../molecules/RoomsCards/RoomsCards';
import { roomsData } from '../../../assets/data/rooms-data';
import './LandingPageCardsSection.scss';

const LandingPageCardsSection = () => {
    return (
        <div className='LandingPageCardsSection_container'>
            {roomsData.map((roomData, idx) => {
                return (
                    <div key={idx}>
                        <RoomsCards roomData={roomData} />
                    </div>
                );
            })}
        </div>
    );
};

export default LandingPageCardsSection;
