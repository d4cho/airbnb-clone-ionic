import React from 'react';
import Button from '../../../atoms/Button/Button';
import { BiSearch } from 'react-icons/bi';
import './WhereCard.scss';
import { whereCardData } from '../../../../assets/data/where-card-data';
import { useAppContext } from '../../../../context/AppContext';

const WhereCard = (props) => {
    const { setIsSearchDestination, setSelectedCard } = props;
    const { searchData, setSearchData } = useAppContext();

    const updateSearchData = (destination) => {
        setSearchData({
            ...searchData,
            where: {
                destination: destination,
            },
        });

        setSelectedCard('When');
    };

    const searchBtnStyle = {
        padding: '1rem 1rem',
        border: '1px solid #767676',
        borderRadius: '10px',
        color: '#000',
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        width: '100%',
    };

    return (
        <div className='WhereCard_container'>
            <div className='title'>Where to?</div>
            <div className='button'>
                <Button
                    onButtonClick={() => setIsSearchDestination(true)}
                    btnContent={
                        <>
                            <BiSearch />
                            <span
                                style={{
                                    paddingLeft: '1rem',
                                    color: '#767676',
                                }}
                            >
                                {searchData?.where?.destination ||
                                    'Search destinations'}
                            </span>
                        </>
                    }
                    btnStyleOverride={searchBtnStyle}
                />
            </div>
            <div className='image_scroll'>
                {whereCardData.map((item, idx) => {
                    const isSelected =
                        searchData.where.destination === item.destination;

                    return (
                        <div
                            key={idx}
                            className='image_and_text'
                            onClick={() => updateSearchData(item.destination)}
                        >
                            <img
                                className={`${
                                    isSelected ? 'selected_img' : ''
                                }`}
                                src={item.imageUrl}
                                alt={item.destination}
                            />
                            <div
                                className={`text ${
                                    isSelected ? 'selected_text' : ''
                                }`}
                            >
                                {item.destination}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhereCard;
