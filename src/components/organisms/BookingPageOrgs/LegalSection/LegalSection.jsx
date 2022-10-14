import React from 'react';
import Button from '../../../atoms/Button/Button';
import './LegalSection.scss';

const LegalSection = (props) => {
    const { setShowAlert } = props;

    const btnStyle = {
        padding: '1rem 0',
        color: '#FFF',
        fontSize: '18px',
        fontWeight: 'bold',
        backgroundColor: '#FF385C',
        borderRadius: '10px',
        width: '100%',
    };

    return (
        <div className='LegalSection_container'>
            <div className='LegalSection_p1'>
                By selecting the button below, I agree to the{' '}
                <span>Host's House Rules</span>,{' '}
                <span>Airbnb's Rebooking and Refund Policy</span>, and that
                Airbnb can <span>charge my payment method</span> if I'm
                responsible for damage. I agree to pay the total amount shown if
                the Host accepts my booking request.
            </div>
            <div className='LegalSection_p2'>
                I also agree to the <a href='/book'>updated</a>{' '}
                <a href='/book'>Terms of Service</a>,{' '}
                <a href='/book'>Payments Terms of Service</a>, and I acknowledge
                the <a href='/book'>Privacy Policy</a>.
            </div>
            <div>
                <Button
                    btnContent={'Request to book • Airbnb'}
                    btnStyleOverride={btnStyle}
                    onButtonClick={() => setShowAlert(true)}
                />
            </div>
        </div>
    );
};

export default LegalSection;
