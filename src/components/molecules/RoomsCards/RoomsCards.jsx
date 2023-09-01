import Carousel from '../../atoms/Carousel/Carousel';
import './RoomsCards.scss';

const RoomsCards = (props) => {
    const { roomData } = props;
    const { location, rating, distance, dates, price, images } = roomData;
    return (
        <div className='RoomsCards_container'>
            <div className='carousel'>
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
                <div className='price'>${price} /night</div>
            </div>
        </div>
    );
};

export default RoomsCards;
