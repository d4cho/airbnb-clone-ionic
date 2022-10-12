import React from 'react';
import './RequestToBookPage.scss';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import { HiChevronLeft } from 'react-icons/hi';
import { useHistory, useParams } from 'react-router';
import LegalSection from '../components/organisms/BookingPageOrgs/LegalSection/LegalSection';
import ReservationNote from '../components/organisms/BookingPageOrgs/ReservationNote/ReservationNote';
import CancellationPolicy from '../components/organisms/BookingPageOrgs/CancellationPolicy/CancellationPolicy';
import RequiredActions from '../components/organisms/BookingPageOrgs/RequiredActions/RequiredActions';
import PaymentOptions from '../components/organisms/BookingPageOrgs/PaymentOptions/PaymentOptions';
import PriceDetails from '../components/organisms/BookingPageOrgs/PriceDetails/PriceDetails';
import TripDetails from '../components/organisms/BookingPageOrgs/TripDetails/TripDetails';
import BookingSummary from '../components/organisms/BookingPageOrgs/BookingSummary/BookingSummary';
import { roomsData } from '../assets/data/rooms-data';

const RequestToBookPage = () => {
    const history = useHistory();
    const { id } = useParams();

    const roomData = roomsData.filter((data) => data.id === id)[0];

    return (
        <IonPage className='RequestToBookPage_container'>
            <IonHeader className='RequestToBookPage_header'>
                <div className='RequestToBookPage_back'>
                    <HiChevronLeft
                        size={28}
                        onClick={() => {
                            history.goBack();
                        }}
                    />
                </div>
                <div className='RequestToBookPage_title'>
                    Request to book • Airbnb
                </div>
            </IonHeader>
            <IonContent>
                <div className='RequestToBookPage_content'>
                    <section>
                        <BookingSummary roomData={roomData} />
                    </section>
                    <div className='RequestToBookPage_divider' />
                    <section>
                        <TripDetails />
                    </section>
                    <div className='RequestToBookPage_divider' />
                    <section>
                        <PriceDetails />
                    </section>
                    <div className='RequestToBookPage_divider' />
                    <section>
                        <PaymentOptions />
                    </section>
                    <div className='RequestToBookPage_divider' />
                    <section>
                        <RequiredActions />
                    </section>
                    <div className='RequestToBookPage_divider' />
                    <section>
                        <CancellationPolicy />
                    </section>
                    <div className='RequestToBookPage_divider' />
                    <section>
                        <ReservationNote />
                    </section>
                    <div className='RequestToBookPage_divider' />
                    <section>
                        <LegalSection />
                    </section>
                    <div className='RequestToBookPage_divider' />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default RequestToBookPage;
