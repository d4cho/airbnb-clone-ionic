import React from 'react';
import './SearchDestinationCard.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import TextInput from '../../atoms/TextInput/TextInput';

const SearchDestinationCard = () => {
    return (
        <div className='SearchDestinationCard_container'>
            <TextInput
                icon={<AiOutlineSearch size={26} />}
                placeholderText={'Search destinations'}
            />
        </div>
    );
};

export default SearchDestinationCard;
