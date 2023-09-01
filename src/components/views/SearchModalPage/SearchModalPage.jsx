import React, { useState } from 'react';
import './SearchModalPage.scss';
import Button from '../../atoms/Button/Button';
import { GrFormClose } from 'react-icons/gr';
import { FiChevronLeft } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import SearchCards from '../../molecules/SearchCards/SearchCards';
import { useAppContext } from '../../../context/AppContext';
import { capitalizeFirstLetter } from '../../../utils/functions/functions';
import SearchDestinationCard from '../../molecules/SearchDestinationCard/SearchDestinationCard';
import { Link } from 'react-router-dom';

const SearchModalPage = (props) => {
    const { closeModal, isFromSearchResults } = props;
    const [selectedTab, setSelectedTab] = useState('Stays');
    const [selectedCard, setSelectedCard] = useState('Where');
    const [isSearchDestination, setIsSearchDestination] = useState(false);
    const { searchData, resetSearchData } = useAppContext();

    const closeBtnStyle = {
        border: '1px solid #767676',
        borderRadius: '50%',
        padding: '0.25rem',
        backgroundColor: '#FFF',
    };

    const searchBtnStyle = {
        padding: '0.5rem 1rem',
        borderRadius: '7.5px',
        color: '#FFF',
        backgroundColor: '#FF385C',
        display: 'flex',
        alignItems: 'center',
    };

    const handleCloseClick = () => {
        if (!isFromSearchResults) {
            resetSearchData();
        }
        setSelectedTab('Stays');
        setSelectedCard('Where');
        closeModal();
    };

    const handleCardClick = (cardType) => {
        setSelectedCard(cardType);
    };

    const handleClearAll = () => {
        resetSearchData();
        setSelectedTab('Stays');
        setSelectedCard('Where');
    };

    const handleSearchClick = () => {
        closeModal();
    };

    const whoCardCollapsedDefaultText = () => {
        const { adults, children, infants, pets } = searchData.who;
        const total = adults + children + infants + pets;
        if (total === 0) {
            return 'Add guests';
        } else {
            const guestsText = `${adults + children} guest${
                adults + children > 1 ? 's' : ''
            }`;
            const infantsText = `${infants} infant${infants > 1 ? 's' : ''}`;
            const petsText = `${pets} pet${pets > 1 ? 's' : ''}`;

            return `${guestsText}${infants ? ', ' + infantsText : ''}${
                pets ? ', ' + petsText : ''
            }`;
        }
    };

    const whenCardCollapsedDefaultText = () => {
        const { dateType } = searchData.when;
        const { startDate, endDate, plusMinusDays } = searchData.when.choose;
        const { stayDuration, whenMonthYear } = searchData.when.flexible;

        if (dateType === 'choose') {
            if (!startDate || !endDate) return 'Add dates';

            const start = startDate.slice(-5);
            const end = endDate.slice(-5);

            return `${start} ~ ${end} ${
                plusMinusDays === 'Exact dates'
                    ? ''
                    : // eslint-disable-next-line no-useless-concat
                      '(' + '\xB1' + plusMinusDays + ')'
            }`;
        }

        if (dateType === 'flexible') {
            if (whenMonthYear.length === 0) return 'Add dates';

            const months = whenMonthYear.map((item) => {
                let monthStr = `${item.slice(0, item.length - 4)}`;
                if (whenMonthYear.length > 1) {
                    monthStr = `${item.slice(0, 3)}.`;
                }
                return monthStr;
            });
            return `${capitalizeFirstLetter(stayDuration)} in ${months.join(
                ', '
            )}`;
        }
    };

    return (
        <div className='SearchModalPage_container'>
            <div className='top'>
                <div className='close_btn'>
                    {isSearchDestination ? (
                        <Button
                            onButtonClick={() => setIsSearchDestination(false)}
                            btnContent={<FiChevronLeft />}
                            btnStyleOverride={closeBtnStyle}
                        />
                    ) : (
                        <Button
                            onButtonClick={handleCloseClick}
                            btnContent={<GrFormClose />}
                            btnStyleOverride={closeBtnStyle}
                        />
                    )}
                </div>
                <div
                    className={`tab ${
                        selectedTab === 'Stays'
                            ? 'SearchModalPage_selected'
                            : ''
                    }`}
                    onClick={() => setSelectedTab('Stays')}
                >
                    Stays
                </div>
                <div
                    className={`tab ${
                        selectedTab === 'Experiences'
                            ? 'SearchModalPage_selected'
                            : ''
                    }`}
                    onClick={() => setSelectedTab('Experiences')}
                >
                    Experiences
                </div>
            </div>
            {isSearchDestination ? (
                <div className='search_destination'>
                    <SearchDestinationCard />
                </div>
            ) : (
                <>
                    <div className='cards'>
                        <SearchCards
                            handleCardClick={handleCardClick}
                            isExpanded={selectedCard === 'Where'}
                            searchCardsContent={{
                                collapsedTitle: 'Where',
                                collapsedDefaultText:
                                    searchData?.where?.destination ||
                                    "I'm flexible",
                            }}
                            setSelectedCard={setSelectedCard}
                            setIsSearchDestination={setIsSearchDestination}
                        />
                        <SearchCards
                            handleCardClick={handleCardClick}
                            isExpanded={selectedCard === 'When'}
                            searchCardsContent={{
                                collapsedTitle: 'When',
                                collapsedDefaultText:
                                    whenCardCollapsedDefaultText(),
                            }}
                            setSelectedCard={setSelectedCard}
                        />
                        <SearchCards
                            handleCardClick={handleCardClick}
                            isExpanded={selectedCard === 'Who'}
                            searchCardsContent={{
                                collapsedTitle: 'Who',
                                collapsedDefaultText:
                                    whoCardCollapsedDefaultText(),
                            }}
                            setSelectedCard={setSelectedCard}
                        />
                    </div>
                    <div className='bottom'>
                        <div className='clear' onClick={handleClearAll}>
                            Clear all
                        </div>
                        <Link to={`/search-results`}>
                            <Button
                                onButtonClick={handleSearchClick}
                                btnContent={
                                    <>
                                        <BiSearch />
                                        <span style={{ paddingLeft: '0.5rem' }}>
                                            Search
                                        </span>
                                    </>
                                }
                                btnStyleOverride={searchBtnStyle}
                            />
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default SearchModalPage;
