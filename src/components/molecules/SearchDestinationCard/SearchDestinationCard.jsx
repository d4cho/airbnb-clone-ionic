import React from 'react';
import './SearchDestinationCard.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import TextInput from '../../atoms/TextInput/TextInput';

const SearchDestinationCard = () => {
    return (
        <div className='SearchDestinationCard_container'>
            <TextInput
                startAdornment={<AiOutlineSearch size={26} />}
                placeholderText={'Search destinations'}
                clearable={true}
                styleOverride={{
                    backgroundColor: '#ebebeb',
                    borderRadius: '25px',
                }}
            />
        </div>
    );
};

export default SearchDestinationCard;
