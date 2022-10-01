import React, { useRef, useState } from 'react';
import './SearchResultsPage.scss';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import ClickableSearchBar from '../components/molecules/ClickableSearchBar/ClickableSearchBar';
import { BsArrowLeftShort, BsToggles2 } from 'react-icons/bs';
import { useHistory } from 'react-router';
import { useAppContext } from '../context/AppContext';
import Modal from '../components/organisms/Modal/Modal';
import SearchModalPage from '../components/views/SearchModalPage/SearchModalPage';

const SearchResultsPage = () => {
    let history = useHistory();
    const { isModalOpen, setIsModalOpen, resetSearchData } = useAppContext();

    const [modalType, setModalType] = useState('search');

    // modal code
    const modalRef = useRef(null);

    const handleModalClose = () => {
        setIsModalOpen(false);
        modalRef.current?.dismiss();
    };

    const handleBackArrowClick = () => {
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

    return (
        <IonPage className='SearchResultsPage_container'>
            <IonHeader className='SearchResultsPage_header'>
                <ClickableSearchBar
                    mainText={'Where to?'}
                    subText={'Anywhere • Any week • Add guests'}
                    onTextClick={handleTextClick}
                    leftIcon={<BsArrowLeftShort size={24} color={'#000'} />}
                    onLeftIconClick={handleBackArrowClick}
                    rightIcon={<BsToggles2 />}
                    onRightIconClick={handleFilterClick}
                />
            </IonHeader>
            <IonContent>google map goes here</IonContent>
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
        </IonPage>
    );
};

export default SearchResultsPage;
