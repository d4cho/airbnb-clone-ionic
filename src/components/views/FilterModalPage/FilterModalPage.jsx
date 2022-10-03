import React from 'react';
import './FilterModalPage.scss';
import { IonContent, IonFooter, IonHeader, IonPage } from '@ionic/react';
import { IoClose } from 'react-icons/io5';
import Button from '../../atoms/Button/Button';
import CheckboxList from '../../organisms/FilterModalOrgs/CheckboxList/CheckboxList';
import { typeOfPlaceCheckboxItems } from '../../../assets/data/filter-data';

const FilterModalPage = (props) => {
    const { closeModal } = props;

    const clearBtnStyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
    };

    const showBtnStyle = {
        backgroundColor: '#000',
        color: '#FFF',
        fontWeight: 'bold',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
    };

    return (
        <IonPage className='FilterModalPage_container'>
            <IonHeader className='FilterModalPage_header'>
                <div className='close_btn'>
                    <Button
                        btnContent={<IoClose size={28} onClick={closeModal} />}
                    />
                </div>
                <div className='filter_title'>Filters</div>
            </IonHeader>
            <IonContent>
                <div className='FilterModalPage_content'>
                    <h1>Filter Modal Page</h1>
                    <div className='divider_line' />

                    <div>Price range</div>
                    <div className='divider_line' />

                    <CheckboxList
                        headingText={'Type of place'}
                        checkboxItems={typeOfPlaceCheckboxItems}
                    />
                    <div className='divider_line' />

                    <div>Rooms and beds</div>
                    <div className='divider_line' />

                    <div>Property type</div>
                    <div className='divider_line' />

                    <div>Amenities</div>
                    <div className='divider_line' />

                    <div>Booking options</div>
                    <div className='divider_line' />

                    <div>Accessibility features</div>
                    <div className='divider_line' />

                    <div>Top tier stays</div>
                    <div className='divider_line' />

                    <div>Host language</div>
                    <div className='divider_line' />
                </div>
            </IonContent>
            <IonFooter className='FilterModalPage_footer'>
                <div className='clear_btn'>
                    <Button
                        btnContent={'Clear all'}
                        btnStyleOverride={clearBtnStyle}
                    />
                </div>
                <div className='show_btn'>
                    <Button
                        btnContent={'Show 777 homes'}
                        btnStyleOverride={showBtnStyle}
                    />
                </div>
            </IonFooter>
        </IonPage>
    );
};

export default FilterModalPage;
