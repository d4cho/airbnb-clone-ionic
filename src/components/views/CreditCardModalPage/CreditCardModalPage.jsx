import React from 'react';
import './CreditCardModalPage.scss';
import { IonContent, IonFooter, IonHeader, IonPage } from '@ionic/react';
import Button from '../../atoms/Button/Button';
import { GrFormClose } from 'react-icons/gr';

const CreditCardModalPage = (props) => {
    const { handleModalClose } = props;

    const doneBtnStyle = {
        width: '100%',
        padding: '14px 24px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#FFF',
        backgroundColor: '#000',
        borderRadius: '10px',
    };

    const closeBtnStyle = {
        color: '#000',
        backgroundColor: 'transparent',
        padding: '0px 0px',
    };

    return (
        <IonPage className='CreditCardModalPage_container'>
            <IonHeader className='CreditCardModalPage_header'>
                <div className='CreditCardModalPage_closeBtn'>
                    <Button
                        btnContent={<GrFormClose size={24} />}
                        btnStyleOverride={closeBtnStyle}
                        onButtonClick={handleModalClose}
                    />
                </div>
                <div className='CreditCardModalPage_title'>
                    Add card details
                </div>
            </IonHeader>
            <IonContent>
                <div className='CreditCardModalPage_content'>content</div>
            </IonContent>
            <IonFooter>
                <Button
                    btnContent={'Done'}
                    btnStyleOverride={doneBtnStyle}
                    onButtonClick={handleModalClose}
                />
            </IonFooter>
        </IonPage>
    );
};

export default CreditCardModalPage;
