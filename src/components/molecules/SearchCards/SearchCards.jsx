import React from 'react';
import './SearchCards.scss';
import { useAppContext } from '../../../context/AppContext';
import WhereCard from './WhereCard/WhereCard';
import WhoCard from './WhoCard/WhoCard';
import WhenCard from './WhenCard/WhenCard';

const SearchCards = (props) => {
    const { isModalOpen } = useAppContext();
    const { isExpanded, handleCardClick, searchCardsContent } = props;
    const { collapsedTitle, collapsedDefaultText } = searchCardsContent;

    const renderCard = () => {
        if (searchCardsContent.collapsedTitle === 'Where') {
            return <WhereCard />;
        } else if (searchCardsContent.collapsedTitle === 'When') {
            return <WhenCard />;
        } else {
            return <WhoCard />;
        }
    };

    if (isExpanded) {
        return (
            <div
                className={`SearchCards_container ${
                    isExpanded ? 'shadow' : ''
                }`}
                onClick={() => handleCardClick(collapsedTitle)}
            >
                <div className='expanded_container'>{renderCard()}</div>
            </div>
        );
    }

    return (
        <div
            className={`SearchCards_container ${isModalOpen ? 'animate' : ''}`}
            onClick={() => handleCardClick(collapsedTitle)}
        >
            <div className='collapsed_container'>
                <div className='short_title'>{collapsedTitle}</div>
                <div className='collapsed_text'>{collapsedDefaultText}</div>
            </div>
        </div>
    );
};

export default SearchCards;
