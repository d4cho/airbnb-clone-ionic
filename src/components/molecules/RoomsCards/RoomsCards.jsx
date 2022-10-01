import React from 'react';
import Carousel from '../../atoms/Carousel/Carousel';
import './RoomsCards.scss';
import { AiOutlineHeart } from 'react-icons/ai';

const RoomsCards = (props) => {
    const { roomData } = props;
    const { location, rating, distance, dates, price, images, category } =
        roomData;
    return (
        <div className='RoomsCards_container'>
            <div className='carousel'>
                <AiOutlineHeart
                    className='icon'
                    onClick={() => alert('add to wishlist')}
                />
                <Carousel
                    list={images}
                    paginationType='dots'
                    imageStyleOverride={{ borderRadius: '10px' }}
                />
            </div>
            <div className='content'>
                <div className='location_and_rank'>
                    <div>{location}</div>
                    <div>
                        &#9733; <span>{rating}</span>
                    </div>
                </div>
                <div className='distance'>{distance} km</div>
                <div className='dates'>{dates}</div>
                <div className='price'>${price} night</div>
            </div>
        </div>
    );
};

export default RoomsCards;
