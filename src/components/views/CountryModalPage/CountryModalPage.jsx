import React, { useLayoutEffect, useRef } from 'react';
import './CountryModalPage.scss';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import Button from '../../atoms/Button/Button';
import { GrFormClose } from 'react-icons/gr';
import { countryList } from '../../../assets/data/country-list';
import { useAppContext } from '../../../context/AppContext';
import { BsCheck } from 'react-icons/bs';

const CountryModalPage = (props) => {
    const { handleModalClose } = props;

    const { creditCardInfo, setCreditCardInfo } = useAppContext();

    const countryRef = useRef();

    useLayoutEffect(() => {
        setTimeout(() => {
            countryRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }, 750);
    }, [countryRef]);

    const closeBtnStyle = {
        color: '#000',
        backgroundColor: 'transparent',
        padding: '0px 0px',
    };

    const handleCountryClick = (selectedCountry) => {
        setCreditCardInfo({
            ...creditCardInfo,
            country: selectedCountry,
        });
        handleModalClose();
    };

    return (
        <IonPage className='CountryModalPage_container'>
            <IonHeader className='CountryModalPage_header'>
                <div className='CountryModalPage_closeBtn'>
                    <Button
                        btnContent={<GrFormClose size={24} />}
                        btnStyleOverride={closeBtnStyle}
                        onButtonClick={handleModalClose}
                    />
                </div>
                <div className='CountryModalPage_title'>Country/region</div>
            </IonHeader>
            <IonContent>
                <div className='CountryModalPage_content'>
                    {countryList.map((country, idx) => {
                        const isSelected = country === creditCardInfo.country;

                        return (
                            <React.Fragment key={idx}>
                                <div
                                    className='CountryModalPage_item'
                                    onClick={() => handleCountryClick(country)}
                                    ref={isSelected ? countryRef : null}
                                >
                                    <div
                                        className={`CountryModalPage_country ${
                                            isSelected && 'country_selected'
                                        }`}
                                    >
                                        {country}
                                    </div>
                                    {isSelected && <BsCheck size={30} />}
                                </div>
                                {idx !== countryList.length - 1 && (
                                    <div className='CountryModalPage_divider' />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default CountryModalPage;
