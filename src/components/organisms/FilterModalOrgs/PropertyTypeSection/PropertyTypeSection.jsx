import React, { useState } from 'react';
import './PropertyTypeSection.scss';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import SelectableCard from '../../../atoms/SelectableCard/SelectableCard';
import { BsHouse, BsBuilding, BsHouseDoor } from 'react-icons/bs';
import { RiHotelLine } from 'react-icons/ri';

const PropertyTypeSection = () => {
    const [selectedCards, setSelectedCards] = useState([]);

    const handleCardClick = (text) => {
        let newSelectedCards = [...selectedCards];

        if (selectedCards.includes(text)) {
            let filtered = newSelectedCards.filter((item) => item !== text);
            setSelectedCards(filtered);
        } else {
            newSelectedCards.push(text);
            setSelectedCards(newSelectedCards);
        }
    };

    const isSelected = (text) => {
        return selectedCards.includes(text);
    };

    return (
        <div className='PropertyTypeSection_container'>
            <div className='PropertyTypeSection_heading'>Property type</div>
            <IonGrid className='ion-no-padding'>
                <IonRow className='pad-b-8'>
                    <IonCol className='pad-r-8'>
                        <SelectableCard
                            text={'House'}
                            onCardClick={handleCardClick}
                            isSelected={isSelected('House')}
                            icon={<BsHouse size={35} />}
                        />
                    </IonCol>
                    <IonCol className='pad-l-8'>
                        <SelectableCard
                            text={'Apartment'}
                            onCardClick={handleCardClick}
                            isSelected={isSelected('Apartment')}
                            icon={<BsBuilding size={35} />}
                        />
                    </IonCol>
                </IonRow>
                <IonRow className='pad-t-8'>
                    <IonCol className='pad-r-8'>
                        <SelectableCard
                            text={'Guesthouse'}
                            onCardClick={handleCardClick}
                            isSelected={isSelected('Guesthouse')}
                            icon={<BsHouseDoor size={35} />}
                        />
                    </IonCol>
                    <IonCol className='pad-l-8'>
                        <SelectableCard
                            text={'Hotel'}
                            onCardClick={handleCardClick}
                            isSelected={isSelected('Hotel')}
                            icon={<RiHotelLine size={35} />}
                        />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default PropertyTypeSection;
