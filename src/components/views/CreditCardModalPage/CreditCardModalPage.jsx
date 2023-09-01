// import React, { useState, useRef } from 'react';
import './CreditCardModalPage.scss';
// import { IonContent, IonFooter, IonHeader, IonPage } from '@ionic/react';
// import Button from '../../atoms/Button/Button';
// import { GrFormClose } from 'react-icons/gr';
// import { FiChevronDown } from 'react-icons/fi';
// import TextInput from '../../atoms/TextInput/TextInput';
// import { IonGrid, IonRow, IonCol } from '@ionic/react';
// import visaImg from '../../../assets/images/visa.png';
// import Modal from '../../organisms/Modal/Modal';
// import CountryModalPage from '../CountryModalPage/CountryModalPage';
// import { useAppContext } from '../../../context/AppContext';

const CreditCardModalPage = (props) => {
    // const { handleModalClose } = props;

    // const { creditCardInfo } = useAppContext();

    // const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);
    // const countryModalRef = useRef();

    // const handleCountryModalClose = () => {
    //     setIsCountryModalOpen(false);
    //     countryModalRef.current?.dismiss();
    // };

    // const doneBtnStyle = {
    //     width: '100%',
    //     padding: '14px 24px',
    //     fontSize: '16px',
    //     fontWeight: 'bold',
    //     color: '#FFF',
    //     backgroundColor: '#000',
    //     borderRadius: '10px',
    // };

    // const closeBtnStyle = {
    //     color: '#000',
    //     backgroundColor: 'transparent',
    //     padding: '0px 0px',
    // };

    // const countryBtnStyle = {
    //     width: '100%',
    //     backgroundColor: '#FFF',
    //     border: '1px solid #000',
    //     borderRadius: '10px',
    //     padding: '0px',
    // };

    return null;

    // return (
    //     <IonPage className='CreditCardModalPage_container'>
    //         <IonHeader className='CreditCardModalPage_header'>
    //             <div className='CreditCardModalPage_closeBtn'>
    //                 <Button
    //                     btnContent={<GrFormClose size={24} />}
    //                     btnStyleOverride={closeBtnStyle}
    //                     onButtonClick={handleModalClose}
    //                 />
    //             </div>
    //             <div className='CreditCardModalPage_title'>
    //                 Add card details
    //             </div>
    //         </IonHeader>
    //         <IonContent>
    //             <div className='CreditCardModalPage_content'>
    //                 <img
    //                     className='CreditCardModalPage_img'
    //                     src={visaImg}
    //                     alt={'visa'}
    //                 />
    //                 <IonGrid className='CreditCardModalPage_grid ion-no-padding'>
    //                     <IonRow>
    //                         <IonCol>
    //                             <TextInput
    //                                 label={'Card number'}
    //                                 placeholderText={'0000 0000 0000 0000'}
    //                                 styleOverride={{
    //                                     borderRadius: '10px 10px 0 0',
    //                                 }}
    //                                 isRequired={true}
    //                                 maxLength={16}
    //                             />
    //                         </IonCol>
    //                     </IonRow>
    //                     <IonRow>
    //                         <IonCol>
    //                             <TextInput
    //                                 label={'Expiration'}
    //                                 placeholderText={'MM / YY'}
    //                                 styleOverride={{
    //                                     borderRadius: '0 0 0 10px',
    //                                 }}
    //                                 isRequired={true}
    //                                 maxLength={4}
    //                             />
    //                         </IonCol>
    //                         <IonCol>
    //                             <TextInput
    //                                 label={'CVV'}
    //                                 placeholderText={'123'}
    //                                 styleOverride={{
    //                                     borderRadius: '0 0 10px 0',
    //                                 }}
    //                                 isRequired={true}
    //                                 maxLength={3}
    //                             />
    //                         </IonCol>
    //                     </IonRow>
    //                 </IonGrid>
    //                 <div className='CreditCardModalPage_postalCode'>
    //                     <TextInput
    //                         label={'Postal code'}
    //                         styleOverride={{
    //                             borderRadius: '10px',
    //                         }}
    //                         isRequired={true}
    //                         maxLength={6}
    //                     />
    //                 </div>
    //                 <div className='CreditCardModalPage_countryRegion'>
    //                     <Button
    //                         btnContent={
    //                             <div className='CreditCardModalPage_btn_container'>
    //                                 <div className='CreditCardModalPage_btn_left'>
    //                                     <div className='CreditCardModalPage_btn_label'>
    //                                         Country/region
    //                                     </div>
    //                                     <div className='CreditCardModalPage_btn_country'>
    //                                         {creditCardInfo.country}
    //                                     </div>
    //                                 </div>
    //                                 <FiChevronDown size={30} />
    //                             </div>
    //                         }
    //                         btnStyleOverride={countryBtnStyle}
    //                         onButtonClick={() => setIsCountryModalOpen(true)}
    //                     />
    //                 </div>
    //             </div>
    //         </IonContent>
    //         <IonFooter>
    //             <Button
    //                 btnContent={'Done'}
    //                 btnStyleOverride={doneBtnStyle}
    //                 onButtonClick={handleModalClose}
    //             />
    //         </IonFooter>

    //         <Modal
    //             isModalOpen={isCountryModalOpen}
    //             setIsModalOpen={setIsCountryModalOpen}
    //             modalRef={countryModalRef}
    //             modalContent={
    //                 <CountryModalPage
    //                     handleModalClose={handleCountryModalClose}
    //                 />
    //             }
    //             showBackdrop={true}
    //             backdropDismiss={true}
    //         />
    //     </IonPage>
    // );
};

export default CreditCardModalPage;
