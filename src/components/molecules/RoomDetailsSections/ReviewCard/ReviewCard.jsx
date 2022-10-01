import React from 'react';
import Avatar from '../../../atoms/Avatar/Avatar';
import { BiChevronRight } from 'react-icons/bi';
import './ReviewCard.scss';

const ReviewCard = (props) => {
    const {
        reviews,
        reviewInfo,
        isShowAll,
        reviewCardStyleOverride,
        isShowFullReview,
        handleShowMoreClick,
    } = props;

    if (isShowAll) {
        return (
            <div className='ReviewCard_container_showAll'>
                <div className='showAllText'>Show all {reviews} reviews</div>
            </div>
        );
    }

    const { avatar, name, joined, reviewText } = reviewInfo;

    return (
        <div className='ReviewCard_container' style={reviewCardStyleOverride}>
            <div className='heading_section'>
                <div className='avatar'>
                    <Avatar width={40} height={40} imageUrl={avatar} />
                </div>
                <div>
                    <div className='name'>{name}</div>
                    <div className='joined'>{joined}</div>
                </div>
            </div>
            <div className='review_section'>{reviewText}</div>
            {!isShowFullReview && reviewText.length > 170 && (
                <div className='showMore' onClick={handleShowMoreClick}>
                    <div className='showMoreText'>Show more</div>
                    <BiChevronRight size={20} />
                </div>
            )}
        </div>
    );
};

export default ReviewCard;
