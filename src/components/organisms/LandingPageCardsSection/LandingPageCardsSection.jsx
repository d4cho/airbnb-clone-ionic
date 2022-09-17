import React from 'react';
import RoomsCards from '../../molecules/RoomsCards/RoomsCards';
import { roomsData } from '../../../assets/data/rooms-data';

const LandingPageCardsSection = () => {
    return (
        <div>
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
