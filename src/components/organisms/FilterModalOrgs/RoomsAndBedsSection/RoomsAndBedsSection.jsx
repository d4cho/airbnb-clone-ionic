import React from 'react';
import ScrollableChipsBar from '../../../molecules/ScrollableChipsBar/ScrollableChipsBar';
import './RoomsAndBedsSection.scss';

const RoomsAndBedsSection = () => {
    return (
        <div className='RoomsAndBedsSection_container'>
            <div className='RoomsAndBedsSection_heading'>Rooms and beds</div>
            <div className='RoomsAndBedsSection_subheading'>Bedrooms</div>
            <ScrollableChipsBar
                chipContentArr={[
                    'Any',
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8+',
                ]}
            />
            <div className='RoomsAndBedsSection_subheading'>Beds</div>
            <ScrollableChipsBar
                chipContentArr={[
                    'Any',
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8+',
                ]}
            />
            <div className='RoomsAndBedsSection_subheading'>Bathrooms</div>
            <ScrollableChipsBar
                chipContentArr={[
                    'Any',
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8+',
                ]}
            />
        </div>
    );
};

export default RoomsAndBedsSection;
