import React from 'react';
import RoomsCards from '../../molecules/RoomsCards/RoomsCards';
import { roomsData } from '../../../assets/data/rooms-data';
import './LandingPageCardsSection.scss';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const LandingPageCardsSection = (props) => {
    const { handleCardClick } = props;

    const [likedRooms, setLikedRoomsArr] = React.useState([]);

    const handleAddLiked = (roomId) => {
        setLikedRoomsArr([...likedRooms, roomId]);
    };
    const handleRemovedLiked = (roomId) => {
        let removedArr = likedRooms.filter((id) => id !== roomId);
        setLikedRoomsArr(removedArr);
    };

    return (
        <div className='LandingPageCardsSection_container'>
            {roomsData.map((roomData, idx) => {
                return (
                    <div className='card-wrapper'>
                        {likedRooms.includes(roomData.id) ? (
                            <AiFillHeart
                                className='icon'
                                onClick={() => handleRemovedLiked(roomData.id)}
                            />
                        ) : (
                            <AiOutlineHeart
                                className='icon'
                                onClick={() => handleAddLiked(roomData.id)}
                            />
                        )}
                        <Link
                            to={`/rooms/1`} // we only have pics for room 1
                            // to={`/rooms/${roomData.id}`}
                            key={idx}
                            onClick={() => {
                                if (handleCardClick) {
                                    handleCardClick();
                                }
                            }}
                        >
                            <RoomsCards roomData={roomData} />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default LandingPageCardsSection;
