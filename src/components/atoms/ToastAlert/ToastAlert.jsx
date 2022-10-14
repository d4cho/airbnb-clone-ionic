import React, { useEffect } from 'react';
import './ToastAlert.scss';
import { IoClose } from 'react-icons/io5';
import { MdError, MdWarning, MdInfo, MdCheckCircle } from 'react-icons/md';

const ToastAlert = (props) => {
    const {
        isOpen,
        setIsOpen,
        alertType,
        closeable,
        alertDuration,
        text,
        subtext,
    } = props;

    useEffect(() => {
        if (!closeable && isOpen) {
            setTimeout(() => {
                setIsOpen(false);
            }, alertDuration * 1000 || 3000);
        }
    }, [isOpen]);

    const renderIcon = () => {
        switch (alertType) {
            case 'error':
                return <MdError size={50} color={'#c13515'} />;
            case 'warning':
                return <MdWarning size={50} color={'#ffa826'} />;
            case 'info':
                return <MdInfo size={50} color={'#29b6f6'} />;
            case 'success':
                return <MdCheckCircle size={50} color={'#66bb6a'} />;
            default:
                return;
        }
    };

    if (!isOpen) return;

    return (
        <div className='ToastAlert_container alert_slide_in'>
            <div className='ToastAlert_icon'>{renderIcon()}</div>
            <div className='ToastAlert_textContainer'>
                {text && <div className='ToastAlert_text'>{text}</div>}
                {subtext && <div className='ToastAlert_subtext'>{subtext}</div>}
            </div>
            {closeable && (
                <div className='ToastAlert_close'>
                    <IoClose onClick={() => setIsOpen(false)} size={24} />
                </div>
            )}
        </div>
    );
};

export default ToastAlert;
