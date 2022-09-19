import React from 'react';
import RoomsCards from '../../molecules/RoomsCards/RoomsCards';
import { roomsData } from '../../../assets/data/rooms-data';
import './LandingPageCardsSection.scss';
import { Link } from 'react-router-dom';

const LandingPageCardsSection = () => {
    return (
        <div className='LandingPageCardsSection_container'>
            {roomsData.map((roomData, idx) => {
                return (
                    <Link to={`/rooms/${roomData.id}`} key={idx}>
                        <RoomsCards roomData={roomData} />
                    </Link>
                );
            })}
        </div>
    );
};

export default LandingPageCardsSection;
