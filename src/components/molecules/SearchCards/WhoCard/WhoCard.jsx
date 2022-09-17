import React from 'react';
import Button from '../../../atoms/Button/Button';
import './WhoCard.scss';
import { useAppContext } from '../../../../context/AppContext';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

const PERSONS_DATA = [
    {
        type: 'adults',
        info: 'Ages 13 or above',
    },
    {
        type: 'children',
        info: 'Ages 2-12',
    },
    {
        type: 'infants',
        info: 'Under 2',
    },
    {
        type: 'pets',
        info: 'Bringing a service animal?',
        decoration: 'underline',
    },
];

const WhoCard = () => {
    const { searchData, setSearchData } = useAppContext();

    const handleMinusClick = (personType) => {
        setSearchData({
            ...searchData,
            who: {
                ...searchData.who,
                [personType]: searchData.who[personType] - 1,
            },
        });
    };

    const handlePlusClick = (personType) => {
        setSearchData({
            ...searchData,
            who: {
                ...searchData.who,
                adults: !searchData.who.adults ? 1 : searchData.who.adults,
                [personType]: searchData.who[personType] + 1,
            },
        });
    };

    const btnStyle = {
        border: '1px solid #767676',
        borderRadius: '50%',
        padding: '0.25rem',
        backgroundColor: '#FFF',
    };

    return (
        <div className='WhoCard_container'>
            <div className='title'>Who's coming?</div>
            {PERSONS_DATA.map((person, idx) => {
                // guests are adults + children
                const totalGuests =
                    searchData.who.adults + searchData.who.children;
                const numPerson = searchData.who[person.type];
                const isMinusDisabled = () => {
                    const { adults, children, infants, pets } = searchData.who;
                    if (person.type === 'adults') {
                        if (children || infants || pets) {
                            if (adults === 1) {
                                return true;
                            }
                        } else {
                            return numPerson === 0;
                        }
                    }
                    return numPerson === 0;
                };
                const isPlusDisabled = () => {
                    if (
                        person.type === 'adults' ||
                        person.type === 'children'
                    ) {
                        return totalGuests >= 16;
                    }
                    if (person.type === 'infants' || person.type === 'pets') {
                        return numPerson >= 5;
                    }
                    return false;
                };

                return (
                    <div
                        key={idx}
                        className={`person_container ${
                            idx === PERSONS_DATA.length - 1 ? 'last' : ''
                        }`}
                    >
                        <div>
                            <div className='person_type'>
                                {person.type.charAt(0).toUpperCase() +
                                    person.type.slice(1)}
                            </div>
                            <div
                                className='person_info'
                                style={{
                                    textDecoration:
                                        person.decoration === 'underline'
                                            ? person.decoration
                                            : '',
                                }}
                            >
                                {person.info}
                            </div>
                        </div>
                        <div className='buttons'>
                            <Button
                                onButtonClick={() =>
                                    handleMinusClick(person.type)
                                }
                                btnContent={<AiOutlineMinus />}
                                btnStyleOverride={btnStyle}
                                isDisabled={isMinusDisabled()}
                            />
                            <div className='number'>{numPerson}</div>
                            <Button
                                onButtonClick={() =>
                                    handlePlusClick(person.type)
                                }
                                btnContent={<AiOutlinePlus />}
                                btnStyleOverride={btnStyle}
                                isDisabled={isPlusDisabled()}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default WhoCard;
