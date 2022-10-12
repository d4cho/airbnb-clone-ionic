import React from 'react';
import './CancellationPolicy.scss';

const CancellationPolicy = () => {
    return (
        <div className='CancellationPolicy_container'>
            <div className='CancellationPolicy_heading'>
                Cancellation policy
            </div>
            <div className='CancellationPolicy_body'>
                This reservation is non-refundable. <span>Learn more</span>
            </div>
        </div>
    );
};

export default CancellationPolicy;
