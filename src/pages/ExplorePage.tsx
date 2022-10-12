import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import ScrollableSelectionBar from '../components/molecules/ScrollableSelectionBar/ScrollableSelectionBar';
import './ExplorePage.scss';
import ClickableSearchBar from '../components/molecules/ClickableSearchBar/ClickableSearchBar';
import { useAppContext } from '../context/AppContext';
import LandingPageCardsSection from '../components/organisms/LandingPageCardsSection/LandingPageCardsSection';
import { BsFillMapFill } from 'react-icons/bs';
import Button from '../components/atoms/Button/Button';
import { CreateAnimation } from '@ionic/react';
import { BiSearch } from 'react-icons/bi';
import { BsToggles2 } from 'react-icons/bs';

import Modal from '../components/organisms/Modal/Modal';
import SearchModalPage from '../components/views/SearchModalPage/SearchModalPage';
import Icon from '../components/atoms/Icon/Icon';
import { Link } from 'react-router-dom';
import FilterModalPage from '../components/views/FilterModalPage/FilterModalPage';

const ExplorePage: React.FC = () => {
    const { offset, scrollDirection, handleContentScroll } = useAppContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState('search');
    const [selectedTab, setSelectedTab] = useState(0);

    // modal code
    const modalRef = useRef<HTMLIonModalElement>(null);

    const handleModalClose = () => {
        setIsModalOpen(false);
        modalRef.current?.dismiss();
    };

    const handleSearchClick = () => {
        setModalType('search');
        setIsModalOpen(true);
    };

    const handleFilterClick = () => {
        setModalType('filter');
        setIsModalOpen(true);
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

    return (
        <IonPage className='ExplorePage_container'>
            <IonHeader className='ExplorePageHeader'>
                <ClickableSearchBar
                    mainText={'Where to?'}
                    subText={'Anywhere • Any week • Add guests'}
                    onTextClick={handleSearchClick}
                    leftIcon={
                        <Icon
                            iconContent={{
                                icon: <BiSearch size={20} />,
                                text: '',
                            }}
                        />
                    }
                    onLeftIconClick={handleSearchClick}
                    rightIcon={<BsToggles2 />}
                    onRightIconClick={handleFilterClick}
                />
                <ScrollableSelectionBar
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />
            </IonHeader>
            <IonContent
                scrollEvents={true}
                onIonScroll={(e) => handleContentScroll(e)}
            >
                <LandingPageCardsSection />

                <CreateAnimation
                    duration={300}
                    fromTo={[
                        {
                            property: 'bottom',
                            fromValue: '0px',
                            toValue: '30px',
                        },
                        { property: 'opacity', fromValue: '0', toValue: '1' },
                    ]}
                    play={offset >= 200}
                >
                    <div
                        className={`map_btn ${offset < 200 ? 'hidden' : ''} ${
                            offset >= 1000 && scrollDirection === 'down'
                                ? 'move_down'
                                : ''
                        }`}
                        slot='fixed'
                    >
                        <Link to={`/search-results`}>
                            <Button
                                btnContent={btnContent}
                                onButtonClick={() => {}}
                                btnOptions={null}
                                btnStyleOverride={btnStyleOverride}
                            />
                        </Link>
                    </div>
                </CreateAnimation>

                <Modal
                    isModalOpen={isModalOpen}
                    modalRef={modalRef}
                    modalContent={
                        modalType === 'search' ? (
                            <SearchModalPage closeModal={handleModalClose} />
                        ) : (
                            <FilterModalPage closeModal={handleModalClose} />
                        )
                    }
                />
            </IonContent>
        </IonPage>
    );
};

export default ExplorePage;
