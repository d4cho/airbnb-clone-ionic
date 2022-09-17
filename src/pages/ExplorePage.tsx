import React, { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ScrollableSelectionBar from '../components/molecules/ScrollableSelectionBar/ScrollableSelectionBar';
import './ExplorePage.scss';
import ClickableSearchBar from '../components/molecules/ClickableSearchBar/ClickableSearchBar';
import { useAppContext } from '../context/AppContext';
import LandingPageCardsSection from '../components/organisms/LandingPageCardsSection/LandingPageCardsSection';
import { BsFillMapFill } from 'react-icons/bs';
import Button from '../components/atoms/Button/Button';
import { CreateAnimation } from '@ionic/react';

const ExplorePage: React.FC = () => {
    const {
        isModalOpen,
        setIsModalOpen,
        offset,
        scrollDirection,
        handleContentScroll,
    } = useAppContext();
    const [modalType, setModalType] = useState('search');
    const [selectedTab, setSelectedTab] = useState(0);

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
                    handleSearchClick={handleSearchClick}
                    handleFilterClick={handleFilterClick}
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
                        <Button
                            btnContent={btnContent}
                            onButtonClick={() => {
                                alert('map clicked!');
                            }}
                            btnOptions={null}
                            btnStyleOverride={btnStyleOverride}
                        />
                    </div>
                </CreateAnimation>
            </IonContent>
        </IonPage>
    );
};

export default ExplorePage;
