import React from 'react';
import './HostCard.scss';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import Avatar from '../../../atoms/Avatar/Avatar';
import { AiFillStar } from 'react-icons/ai';
import { BiMedal } from 'react-icons/bi';
import { BsShieldFillCheck } from 'react-icons/bs';
import { FaAirbnb } from 'react-icons/fa';
import Button from '../../../atoms/Button/Button';

const HostCard = (props) => {
    const { roomData } = props;
    const { user, userJoined, userAvatarUrl, superHost, userLanguages } =
        roomData;

    const btnStyle = {
        border: '1px solid black',
        borderRadius: '10px',
        fontWeight: 'bold',
        padding: '13px 23px',
        backgroundColor: '#FFF',
        width: '100%',
    };

    return (
        <div className='HostCard_container'>
            <IonGrid style={{ paddingBottom: '1.5rem' }}>
                <IonRow>
                    <IonCol>
                        <div className='host-heading'>Hosted by {user}</div>
                        <div className='host-joined'>Join in {userJoined}</div>
                    </IonCol>
                    <IonCol size={2}>
                        <Avatar imageUrl={userAvatarUrl} />
                    </IonCol>
                </IonRow>
            </IonGrid>

            <IonGrid style={{ paddingBottom: '1.5rem' }}>
                <IonRow>
                    <IonCol size={1}>
                        <AiFillStar />
                    </IonCol>
                    <IonCol>
                        <div>653 Reviews</div>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size={1}>
                        <BsShieldFillCheck />
                    </IonCol>
                    <IonCol>
                        <div>Identity Verified</div>
                    </IonCol>
                </IonRow>
                {superHost && (
                    <IonRow>
                        <IonCol size={1}>
                            <BiMedal />
                        </IonCol>
                        <IonCol>
                            <div>Superhost</div>
                        </IonCol>
                    </IonRow>
                )}
            </IonGrid>

            <div className='text'>
                Hi! <br /> Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Exercitationem sequi consectetur minima sapiente
                aspernatur enim qui soluta, cum saepe voluptates!
            </div>

            <div className='text-heading'>During your stay</div>
            <div className='text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione dolorum unde amet, doloribus quis minus eaque voluptas?
                Corporis vero blanditiis, accusantium quam ab culpa quidem sit
                fuga, voluptates quas cupiditate nesciunt sed architecto
                laudantium in? Alias officiis nobis est error?
            </div>

            <div className='text-heading'>{user} is a Superhost</div>
            <div className='text'>
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for guests.
            </div>

            <div className='list'>
                Languages: &nbsp;
                <span>
                    {userLanguages.map((item, idx) => {
                        return idx === userLanguages.length - 1
                            ? item
                            : `${item}, `;
                    })}
                </span>
            </div>
            <div className='list'>Response rate: 100%</div>
            <div className='list'>Response time: within an hour</div>
            <div className='button'>
                <Button
                    btnContent={'Contact host'}
                    btnStyleOverride={btnStyle}
                    // onButtonClick={() => alert('CONTACT HOST clicked!')}
                />
            </div>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <div className='legal'>
                            To protect your payment, never transfer money or
                            communicate outside of the Airbnb website or app.
                        </div>
                    </IonCol>
                    <IonCol className='ion-align-self-center' size={1}>
                        <FaAirbnb size={26} color={'#ff5a5f'} />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default HostCard;
