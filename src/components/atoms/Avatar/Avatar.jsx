import React from 'react';
import './Avatar.scss';

const Avatar = (props) => {
    const { width, height, borderRadius, imageUrl } = props;

    return (
        <div
            className='Avatar_container'
            style={{
                '--width': width || '48px',
                '--height': height || '48px',
                '--borderRadius': borderRadius || '50%',
                '--imageUrl': `url(${imageUrl})` || '',
                border: !imageUrl ? '1px solid black' : '',
            }}
        ></div>
    );
};

export default Avatar;
