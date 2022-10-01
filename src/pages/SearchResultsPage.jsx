import React, { useRef, useState } from 'react';
import './SearchResultsPage.scss';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import ClickableSearchBar from '../components/molecules/ClickableSearchBar/ClickableSearchBar';
import { BsArrowLeftShort, BsToggles2 } from 'react-icons/bs';
import { useHistory } from 'react-router';
import { useAppContext } from '../context/AppContext';
import Modal from '../components/organisms/Modal/Modal';
import SearchModalPage from '../components/views/SearchModalPage/SearchModalPage';
import { capitalizeFirstLetter } from '../utils/functions/functions';
import GoogleMap from '../components/atoms/GoogleMap/GoogleMap';
import LandingPageCardsSection from '../components/organisms/LandingPageCardsSection/LandingPageCardsSection';

const SearchResultsPage = () => {
    let history = useHistory();

    const { isModalOpen, setIsModalOpen, resetSearchData, searchData } =
        useAppContext();

    const { where, when, who } = searchData;

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

    return (
        <IonPage className='SearchResultsPage_container'>
            <IonHeader className='SearchResultsPage_header'>
                <ClickableSearchBar
                    mainText={where.destination || 'Where to?'}
                    subText={
                        `${generateWhenText()} • ${
                            who.adults + who.children
                        } guests` || 'Anywhere • Any week • Add guests'
                    }
                    onTextClick={handleTextClick}
                    leftIcon={<BsArrowLeftShort size={24} color={'#000'} />}
                    onLeftIconClick={handleBackArrowClick}
                    rightIcon={<BsToggles2 />}
                    onRightIconClick={handleFilterClick}
                />
            </IonHeader>
            <IonContent>
                <div className='google_map'>
                    <GoogleMap />
                </div>
            </IonContent>

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
                        <div>
                            <button onClick={handleModalClose}>close</button>
                            <h1>filter modal page</h1>
                        </div>
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
                    <IonContent>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: '14px',
                                paddingTop: '2rem',
                            }}
                        >
                            Over 1,000 homes
                        </div>
                        <LandingPageCardsSection />
                    </IonContent>
                }
            />
        </IonPage>
    );
};

export default SearchResultsPage;
