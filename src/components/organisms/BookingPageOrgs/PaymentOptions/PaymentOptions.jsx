import React, { useState, useRef } from 'react';
import './PaymentOptions.scss';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import Button from '../../../atoms/Button/Button';
import { BsCreditCard2Back, BsPlus } from 'react-icons/bs';
import { FaCcPaypal, FaGooglePay } from 'react-icons/fa';
import Modal from '../../Modal/Modal';
import CreditCardModalPage from '../../../views/CreditCardModalPage/CreditCardModalPage';

const PaymentOptions = () => {
    const [isCreditCardModalOpen, setIsCreditCardModalOpen] = useState(false);
    const cardModalRef = useRef();

    const handleModalClose = () => {
        setIsCreditCardModalOpen(false);
        cardModalRef.current?.dismiss();
    };

    const btnStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: '#FFF',
        textDecoration: 'underline',
    };

    return (
        <div className='PaymentOptions_container'>
            <div className='PaymentOptions_heading'>Pay with</div>
            <IonGrid className='PaymentOptions_grid ion-no-padding'>
                <IonRow className='PaymentOptions_row'>
                    <IonCol size={2} className='ion-align-self-center'>
                        <BsCreditCard2Back size={30} />
                    </IonCol>
                    <IonCol className='ion-align-self-center'>
                        Credit or debit card
                    </IonCol>
                    <IonCol size={1} className='ion-align-self-center'>
                        <BsPlus
                            size={30}
                            onClick={() => setIsCreditCardModalOpen(true)}
                        />
                    </IonCol>
                </IonRow>
                <IonRow className='PaymentOptions_row'>
                    <IonCol size={2} className='ion-align-self-center'>
                        <FaCcPaypal size={30} />
                    </IonCol>
                    <IonCol className='ion-align-self-center'>PayPal</IonCol>
                    <IonCol size={1} className='ion-align-self-center'>
                        <BsPlus size={30} />
                    </IonCol>
                </IonRow>
                <IonRow className='PaymentOptions_row'>
                    <IonCol size={2} className='ion-align-self-center'>
                        <FaGooglePay size={30} />
                    </IonCol>
                    <IonCol className='ion-align-self-center'>
                        Google Pay
                    </IonCol>
                    <IonCol size={1} className='ion-align-self-center'>
                        <BsPlus size={30} />
                    </IonCol>
                </IonRow>
            </IonGrid>
            <div className='PaymentOptions_divider' />
            <div className='PaymentOptions_button'>
                <Button
                    btnContent={'Enter a coupon'}
                    btnStyleOverride={btnStyle}
                />
            </div>

            <Modal
                isModalOpen={isCreditCardModalOpen}
                setIsModalOpen={setIsCreditCardModalOpen}
                modalRef={cardModalRef}
                modalContent={
                    <div style={{ height: '50%' }}>
                        <CreditCardModalPage
                            handleModalClose={handleModalClose}
                        />
                    </div>
                }
                initialBreakpoint={0.5}
                breakpoints={[0.1, 0.5]}
                showBackdrop={true}
                backdropDismiss={true}
                backdropBreakpoint={0.1}
            />
        </div>
    );
};

export default PaymentOptions;
