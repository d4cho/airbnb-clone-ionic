import React from 'react';
import './PropertyTypeSection.scss';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import SelectableCard from '../../../atoms/SelectableCard/SelectableCard';
import { BsHouse, BsBuilding, BsHouseDoor } from 'react-icons/bs';
import { RiHotelLine } from 'react-icons/ri';

const PropertyTypeSection = () => {
    return (
        <div className='PropertyTypeSection_container'>
            <div className='PropertyTypeSection_heading'>Property type</div>
            <IonGrid className='ion-no-padding'>
                <IonRow className='pad-b-8'>
                    <IonCol className='pad-r-8'>
                        <SelectableCard
                            text={'House'}
                            icon={<BsHouse size={35} />}
                        />
                    </IonCol>
                    <IonCol className='pad-l-8'>
                        <SelectableCard
                            text={'Apartment'}
                            icon={<BsBuilding size={35} />}
                        />
                    </IonCol>
                </IonRow>
                <IonRow className='pad-t-8'>
                    <IonCol className='pad-r-8'>
                        <SelectableCard
                            text={'Guesthouse'}
                            icon={<BsHouseDoor size={35} />}
                        />
                    </IonCol>
                    <IonCol className='pad-l-8'>
                        <SelectableCard
                            text={'Hotel'}
                            icon={<RiHotelLine size={35} />}
                        />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default PropertyTypeSection;
