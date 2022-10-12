import React, { useRef, useState } from 'react';
import './SearchResultsPage.scss';
import { CreateAnimation, IonContent, IonHeader, IonPage } from '@ionic/react';
import ClickableSearchBar from '../components/molecules/ClickableSearchBar/ClickableSearchBar';
import { BsArrowLeftShort, BsToggles2, BsFillMapFill } from 'react-icons/bs';
import { useHistory } from 'react-router';
import { useAppContext } from '../context/AppContext';
import Modal from '../components/organisms/Modal/Modal';
import SearchModalPage from '../components/views/SearchModalPage/SearchModalPage';
import { capitalizeFirstLetter } from '../utils/functions/functions';
import GoogleMap from '../components/atoms/GoogleMap/GoogleMap';
import LandingPageCardsSection from '../components/organisms/LandingPageCardsSection/LandingPageCardsSection';
import Button from '../components/atoms/Button/Button';
import FilterModalPage from '../components/views/FilterModalPage/FilterModalPage';

const SearchResultsPage = () => {
    let history = useHistory();

    const { resetSearchData, searchData, offset, handleContentScroll } =
        useAppContext();

    const { where, when, who } = searchData;

    // for search modal and filter modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // for search results modal that shows properties
    const [isSearchResultsModalOpen, setIsSearchResultsModalOpen] =
        useState(true);
    // for search results modal that shows properties
    const searchResultsModalRef = useRef(null);

    // for search modal and filter modal
    const [modalType, setModalType] = useState('search');
    // for search modal and filter modal
    const modalRef = useRef(null);

    const handleModalClose = () => {
        setIsModalOpen(false);
        modalRef.current?.dismiss();
    };

    const handleBackArrowClick = () => {
        // remove search results modal
        setIsSearchResultsModalOpen(false);
        searchResultsModalRef.current?.dismiss();

        resetSearchData();
        history.goBack();
    };

    const handleTextClick = () => {
        setModalType('search');
        setIsModalOpen(true);
    };

    const handleFilterClick = () => {
        setModalType('filter');
        setIsModalOpen(true);
    };

    const generateWhenText = () => {
        const { dateType } = when;
        const { startDate, endDate, plusMinusDays } = when.choose;
        const { stayDuration, whenMonthYear } = when.flexible;

        if (dateType === 'choose') {
            if (!startDate || !endDate) return 'Add dates';

            const start = startDate.slice(-5);
            const end = endDate.slice(-5);

            return `${start} ~ ${end} ${
                plusMinusDays === 'Exact dates'
                    ? ''
                    : '(' + '\xB1' + plusMinusDays + ')'
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

    const btnContent = (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <span style={{ paddingRight: '5px' }}>Map</span>
            <BsFillMapFill />
        </div>
    );

    const btnStyleOverride = {
        outline: '1px solid rgba(0, 0, 0, 0.08)',
        borderRadius: '24px',
        padding: '11px 19px',
        color: '#FFF',
        fontSize: '12px',
        backgroundColor: 'rgb(34, 34, 34)',
    };

    const numHomesRef = useRef();

    const handleMapBtnClick = () => {
        numHomesRef.current.scrollIntoView();
        searchResultsModalRef.current?.setCurrentBreakpoint(0.08);
    };

    return (
        <IonPage className='SearchResultsPage_container'>
            <IonHeader className='SearchResultsPage_header'>
                <ClickableSearchBar
                    mainText={where.destination || 'Where to?'}
                    subText={`${generateWhenText()} • ${
                        who.adults + who.children
                            ? who.adults + who.children + ' guests'
                            : 'Add guests'
                    }`}
                    onTextClick={handleTextClick}
                    leftIcon={<BsArrowLeftShort size={24} color={'#000'} />}
                    onLeftIconClick={handleBackArrowClick}
                    rightIcon={<BsToggles2 />}
                    onRightIconClick={handleFilterClick}
                />
            </IonHeader>
            <IonContent className='SearchResultsPage_content'>
                <div className='google_map'>
                    <GoogleMap />
                </div>

                {/* for search modal and filter modal */}
                <Modal
                    isModalOpen={isModalOpen}
                    modalRef={modalRef}
                    modalContent={
                        modalType === 'search' ? (
                            <SearchModalPage
                                closeModal={handleModalClose}
                                isFromSearchResults={true}
                            />
                        ) : (
                            <FilterModalPage closeModal={handleModalClose} />
                        )
                    }
                />

                {/* for search results modal that shows properties */}
                <Modal
                    isModalOpen={isSearchResultsModalOpen}
                    modalRef={searchResultsModalRef}
                    initialBreakpoint={0.5}
                    breakpoints={[0.08, 0.5, 0.7, 0.9, 1]}
                    modalContent={
                        <IonContent
                            scrollEvents={true}
                            onIonScroll={(e) => handleContentScroll(e)}
                        >
                            <div
                                ref={numHomesRef}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    paddingTop: '2rem',
                                }}
                            >
                                Over 1,000 homes
                            </div>

                            <LandingPageCardsSection
                                handleCardClick={() => {
                                    searchResultsModalRef.current?.setCurrentBreakpoint(
                                        0.08
                                    );
                                }}
                            />

                            <CreateAnimation
                                duration={300}
                                fromTo={[
                                    {
                                        property: 'bottom',
                                        fromValue: '0px',
                                        toValue: '30px',
                                    },
                                    {
                                        property: 'opacity',
                                        fromValue: '0',
                                        toValue: '1',
                                    },
                                ]}
                                play={offset >= 200}
                            >
                                <div
                                    slot='fixed'
                                    style={
                                        offset < 200
                                            ? {
                                                  visibility: 'hidden',
                                              }
                                            : {
                                                  left: '50%',
                                                  transform:
                                                      'translate(-50%, 0)',
                                              }
                                    }
                                >
                                    <Button
                                        btnContent={btnContent}
                                        onButtonClick={() =>
                                            handleMapBtnClick()
                                        }
                                        btnOptions={null}
                                        btnStyleOverride={btnStyleOverride}
                                    />
                                </div>
                            </CreateAnimation>
                        </IonContent>
                    }
                    backdropBreakpoint={1}
                />
            </IonContent>
        </IonPage>
    );
};

export default SearchResultsPage;
