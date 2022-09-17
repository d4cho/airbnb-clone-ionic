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

const ExplorePage: React.FC = () => {
    const { isModalOpen, setIsModalOpen } = useAppContext();
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

    return (
        <IonPage>
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
            <IonContent>
                {/* <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large'>Explore Page</IonTitle>
                    </IonToolbar>
                </IonHeader> */}
                <LandingPageCardsSection />
                {/* <ExploreContainer name='Explore Page' /> */}
            </IonContent>
        </IonPage>
    );
};

export default ExplorePage;
