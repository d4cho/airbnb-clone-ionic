import React from 'react';
import './DetailsRD.scss';
import { AiFillStar, AiFillFlag, AiOutlineCar } from 'react-icons/ai';
import { BiMedal, BiBath } from 'react-icons/bi';
import { GiCutDiamond, GiForkKnifeSpoon, GiDesk } from 'react-icons/gi';
import { BsDoorOpen, BsCalendarX, BsSnow3 } from 'react-icons/bs';
import { FaMedal } from 'react-icons/fa';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import Avatar from '../../../atoms/Avatar/Avatar';
import ClickableSection from '../../../molecules/RoomDetailsSections/ClickableSection/ClickableSection';
import IconList from '../../../molecules/RoomDetailsSections/IconList/IconList';
import SlidesPerViewCarousel from '../../../molecules/RoomDetailsSections/SlidesPerViewCarousel/SlidesPerViewCarousel';
import Carousel from '../../../atoms/Carousel/Carousel';
import HostCard from '../../../molecules/RoomDetailsSections/HostCard/HostCard';
import Button from '../../../atoms/Button/Button';
import ReviewCard from '../../../molecules/RoomDetailsSections/ReviewCard/ReviewCard';

const DetailsRD = (props) => {
    const { roomData } = props;
    const {
        user,
        userAvatarUrl,
        type,
        title,
        rating,
        reviews,
        superHost,
        location,
        rare,
        guests,
        rooms,
        perks,
        airCover,
        desc,
        roomImages,
        reviewList,
    } = roomData;

    const reviewListArr = reviewList.map((reviewInfo, idx) => {
        return (
            <React.Fragment key={idx}>
                <ReviewCard reviewInfo={reviewInfo} />
            </React.Fragment>
        );
    });
    reviewListArr.push(
        <React.Fragment key={'showAllCard'}>
            <ReviewCard reviews={reviews} isShowAll />
        </React.Fragment>
    );

    return (
        <div className='DetailsRD_container'>
            {/* summary section */}
            <div className='content'>
                <div className='title bold'>{title}</div>
                <div className='extra fs14'>
                    <span>
                        <AiFillStar /> {rating}
                    </span>
                    <span>&nbsp;•&nbsp;</span>
                    <span className='underline'>{reviews} reviews</span>
                    <span>&nbsp;•&nbsp;</span>
                    {superHost && (
                        <span>
                            <BiMedal />
                            &nbsp; Superhost
                        </span>
                    )}
                    <span>&nbsp;•&nbsp;</span>
                </div>
                <div className='underline fs14 bold'>{location}</div>
            </div>
            <div className='line'></div>

            {/* rare section*/}
            {rare && (
                <>
                    <div className='content'>
                        <IonGrid>
                            <IonRow>
                                <IonCol
                                    className='ion-align-self-center'
                                    size='10'
                                >
                                    <b>This is a rare find.</b> {user}'s place
                                    on Airbnb is usually fully booked.
                                </IonCol>
                                <IonCol className='ion-align-self-center flex-end'>
                                    <GiCutDiamond size={35} color='#ff5a5f' />
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </div>
                    <div className='line'></div>
                </>
            )}

            {/* room availability section */}
            <div className='content'>
                <IonGrid>
                    <IonRow>
                        <IonCol className='ion-align-self-center' size='7'>
                            <div className='roomsAvailability bold'>
                                Entire {type} hosted by {user}
                            </div>
                        </IonCol>
                        <IonCol className='ion-align-self-center flex-end'>
                            <Avatar imageUrl={userAvatarUrl} />
                        </IonCol>
                    </IonRow>
                    <div className='roomsInfo'>
                        {guests} guests • {rooms.bedrooms} bedrooms •{' '}
                        {rooms.beds} beds • {rooms.bath} bath
                    </div>
                </IonGrid>
            </div>
            <div className='line'></div>

            {/* perks section */}
            <div className='content'>
                {perks.selfCheckIn && (
                    <IonGrid>
                        <IonRow>
                            <IonCol className='ion-align-self-top' size='1.5'>
                                <BsDoorOpen size={20} />
                            </IonCol>
                            <IonCol className='ion-align-self-top'>
                                <div className='perksTitle bold'>
                                    Self check-in
                                </div>
                                <div className='perksText fs14'>
                                    Check yourself in with the lockbox
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                )}
                {superHost && (
                    <IonGrid>
                        <IonRow>
                            <IonCol className='ion-align-self-top' size='1.5'>
                                <FaMedal size={20} />
                            </IonCol>
                            <IonCol className='ion-align-self-top'>
                                <div className='perksTitle bold'>
                                    {user} is a Superhost
                                </div>
                                <div className='perksText fs14'>
                                    Superhosts are experienced, highly rated
                                    hosts who are committed to providing great
                                    stays for guests.
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                )}
                {perks.freeCancellation && (
                    <IonGrid>
                        <IonRow>
                            <IonCol className='ion-align-self-top' size='1.5'>
                                <BsCalendarX size={20} />
                            </IonCol>
                            <IonCol className='ion-align-self-top'>
                                <div className='perksTitle bold'>
                                    Free cancellation before{' '}
                                    {perks.freeCancellationEndDate}
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                )}
            </div>
            <div className='line'></div>

            {/* aircover section */}
            {airCover && (
                <>
                    <div className='content'>
                        <div className='aircover bold'>
                            <span className='red'>air</span>cover
                        </div>
                        <div className='aircoverText fs14'>
                            Every booking includes free protection from Host
                            cancellations, listing inaccuracies, and other
                            issues like trouble checking in.
                        </div>
                        <div className='bold underline fs14'>Learn more</div>
                    </div>
                    <div className='line'></div>
                </>
            )}

            {/* room description section */}
            {desc && (
                <>
                    <div className='content'>
                        <div className='aircoverText'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illum doloribus accusamus doloremque
                            repellendus consectetur, facilis enim corporis
                            exercitationem debitis obcaecati dolor deleniti quia
                            mollitia? Quas, assumenda. Beatae suscipit sed
                            eveniet!
                        </div>
                        <div className='bold underline'>Show more</div>
                    </div>
                    <div className='line'></div>
                </>
            )}

            {/* where you'll sleep section */}
            <div className='noMarginContent'>
                <div className='roomsInfoHeading'>Where you'll sleep</div>
                <Carousel
                    list={roomImages}
                    slideWidth={163}
                    slidesPerView={2.1}
                    spaceBetweenSlides={12}
                    imageStyleOverride={{
                        borderRadius: '10px',
                        width: 163,
                        height: 109,
                        marginLeft: '1.5rem',
                    }}
                    titleStyleOverride={{
                        marginLeft: '1.5rem',
                        marginTop: '0.5rem',
                        fontWeight: 'bold',
                    }}
                    textStyleOverride={{
                        marginLeft: '1.5rem',
                        marginTop: '0.25rem',
                        fontSize: '14px',
                        color: '#767676',
                    }}
                />
            </div>
            <div className='line'></div>

            {/* what this place offers section */}
            <div className='content'>
                <IconList
                    heading={'What this place offers'}
                    list={[
                        {
                            icon: <GiForkKnifeSpoon size={22} />,
                            text: 'Kitchen',
                        },
                        {
                            icon: <GiDesk size={22} />,
                            text: 'Dedicated workspace',
                        },
                        {
                            icon: <AiOutlineCar size={22} />,
                            text: 'Free parking on premise',
                        },
                        {
                            icon: <BsSnow3 size={22} />,
                            text: 'Air conditioning',
                        },
                        {
                            icon: <BiBath size={22} />,
                            text: 'Bathtub',
                        },
                    ]}
                    ctaText={'Show all 50 amenities'}
                />
            </div>
            <div className='line'></div>

            {/* where you'll be section */}
            <div className='content'>
                <div className='heading'>Where you'll be</div>
                <div
                    style={{ border: '1px solid red', width: 342, height: 218 }}
                >
                    map
                </div>
                <div className='bold padding-top-bot'>{location}</div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi enim cupiditate consequatur sit possimus saepe magnam
                    obcaecati, numquam quos explicabo.
                </div>
                <div className='bold underline pt'>Show more</div>
            </div>
            <div className='line'></div>

            {/* calendar section */}
            <div className='content'>
                <div className='heading'>5 nights in Mill Creek</div>
                <div className='fs14 pb font-gray'>
                    Dec. 11, 2022 - Dec. 16, 2022
                </div>
                <div
                    style={{ border: '1px solid red', width: 342, height: 218 }}
                >
                    calendar
                </div>
                <div className='fs14 bold underline pt'>Clear dates</div>
            </div>
            <div className='line'></div>

            {/* reviews section */}
            <div className='noMarginContent'>
                <div className='reviewsHeading'>
                    <AiFillStar /> &nbsp; {rating} • {reviews} reviews
                </div>
                <Carousel
                    slidesPerView={1.25}
                    spaceBetweenSlides={14}
                    centeredSlides={true}
                >
                    {reviewListArr}
                </Carousel>
                <div style={{ padding: '1.5rem 1.5rem 0 1.5rem' }}>
                    <Button
                        btnContent={`Show all ${reviews} reviews`}
                        btnStyleOverride={{
                            border: '1px solid black',
                            borderRadius: '10px',
                            fontWeight: 'bold',
                            padding: '13px 23px',
                        }}
                        onButtonClick={() => alert('Show all reviews clicked!')}
                    />
                </div>
            </div>
            <div className='line'></div>

            {/* host info section */}
            <div className='content'>
                <HostCard roomData={roomData} />
            </div>
            <div className='line'></div>

            {/* house rules section */}
            <div className='content'>
                <ClickableSection
                    heading={'House rules'}
                    text={'Check-in: After 3:00 p.m.'}
                    handleClick={() => alert('open HOUSE RULES modal')}
                />
            </div>
            <div className='line'></div>

            {/* health and safety section */}
            <div className='content'>
                <ClickableSection
                    heading={'Health & safety'}
                    text={"Airbnb's COVID-19 safety practices apply"}
                    handleClick={() => alert('open H&S modal')}
                />
            </div>
            <div className='line'></div>

            {/* cancellation policy section */}
            <div className='content'>
                <ClickableSection
                    heading={'Cancellation policy'}
                    text={'Free cancellation before Dec. 6.'}
                    moreText={
                        "Review the Host's full cancellation policy, which applies even if you cancel for illness or disruptions caused by COVID-19."
                    }
                    handleClick={() => alert('open CANCELLATION modal')}
                />
            </div>
            <div className='line'></div>

            {/* report section */}
            <div className='content'>
                <div className='report'>
                    <AiFillFlag />
                    &nbsp; &nbsp;
                    <span className='bold underline'>Report this listing</span>
                </div>
            </div>
        </div>
    );
};

export default DetailsRD;
