import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { FiChevronLeft } from 'react-icons/fi';
import { AiFillStar, AiOutlineSearch } from 'react-icons/ai';
import Button from '../../atoms/Button/Button';
import './ReviewsModalPage.scss';
import TextInput from '../../atoms/TextInput/TextInput';
import ReviewCard from '../../molecules/RoomDetailsSections/ReviewCard/ReviewCard';
import ProgressBar from '../../atoms/ProgressBar/ProgressBar';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

const ReviewsModalPage = (props) => {
    const { handleModalClose, rating, reviews, reviewList, reviewCriteria } =
        props;

    const closeBtnStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        width: 'fit-content',
    };

    const reviewCardStyle = {
        border: 'none',
        height: 'auto',
    };

    return (
        <IonPage className='ReviewsModalPage_container'>
            <IonContent className='content'>
                <div className='header' slot='fixed'>
                    <div className='back_button'>
                        <Button
                            btnContent={<FiChevronLeft size={28} />}
                            onButtonClick={handleModalClose}
                            btnStyleOverride={closeBtnStyle}
                        />
                    </div>
                    <div className='rating_reviews'>
                        <AiFillStar /> &nbsp;{rating} • {reviews} reviews
                    </div>
                    <div className='search_reviews'>
                        <TextInput
                            icon={<AiOutlineSearch size={26} />}
                            placeholderText={'Search reviews'}
                        />
                    </div>
                </div>

                <div className='reviews'>
                    <IonGrid class='criteria_grid'>
                        {reviewCriteria.map((item, idx) => {
                            return (
                                <IonRow
                                    key={idx}
                                    class='ion-align-items-center criteria_row'
                                >
                                    <IonCol size={6}>
                                        <div>{item.criteria}</div>
                                    </IonCol>
                                    <IonCol size={4.5}>
                                        <ProgressBar
                                            currProgress={item.rating}
                                            totalProgress={5}
                                        />
                                    </IonCol>
                                    <IonCol size={1.5}>
                                        <div>{item.rating}</div>
                                    </IonCol>
                                </IonRow>
                            );
                        })}
                    </IonGrid>

                    {reviewList.map((item, idx) => {
                        return (
                            <React.Fragment key={idx}>
                                <ReviewCard
                                    reviewInfo={item}
                                    reviewCardStyleOverride={reviewCardStyle}
                                    isShowFullReview={true}
                                />
                            </React.Fragment>
                        );
                    })}

                    {/* just to add more cards starts */}
                    {reviewList.map((item, idx) => {
                        return (
                            <React.Fragment key={idx + 'test'}>
                                <ReviewCard
                                    reviewInfo={item}
                                    reviewCardStyleOverride={reviewCardStyle}
                                    isShowFullReview={true}
                                />
                            </React.Fragment>
                        );
                    })}
                    {reviewList.map((item, idx) => {
                        return (
                            <React.Fragment key={idx + 'testtest'}>
                                <ReviewCard
                                    reviewInfo={item}
                                    reviewCardStyleOverride={reviewCardStyle}
                                    isShowFullReview={true}
                                />
                            </React.Fragment>
                        );
                    })}
                    {reviewList.map((item, idx) => {
                        return (
                            <React.Fragment key={idx + 'testtesttest'}>
                                <ReviewCard
                                    reviewInfo={item}
                                    reviewCardStyleOverride={reviewCardStyle}
                                    isShowFullReview={true}
                                />
                            </React.Fragment>
                        );
                    })}
                    {/* just to add more cards ends */}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ReviewsModalPage;
