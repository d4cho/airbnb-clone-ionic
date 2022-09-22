import React from 'react';
import './ImageCarouselRD.scss';
import Carousel from '../../../atoms/Carousel/Carousel';
import { IonRouterLink } from '@ionic/react';
import Button from '../../../atoms/Button/Button';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';

const ImageCarouselRD = (props) => {
    const { roomData } = props;

    const btnStyle = {
        backgroundColor: '#FFF',
        width: '36px',
        height: '36px',
        borderRadius: '50%',
    };

    return (
        <div className='ImageCarouselRD_container'>
            <IonRouterLink
                className='link'
                routerLink='/'
                routerDirection='back'
            >
                <Button
                    btnContent={<IoIosArrowBack fontSize={20} />}
                    btnStyleOverride={btnStyle}
                />
            </IonRouterLink>
            <div className='share_btn'>
                <Button
                    btnContent={<FiShare fontSize={20} />}
                    btnStyleOverride={btnStyle}
                    onButtonClick={() => alert('share clicked!')}
                />
            </div>
            <div className='wishlist_btn'>
                <Button
                    btnContent={<AiOutlineHeart fontSize={20} />}
                    btnStyleOverride={btnStyle}
                    onButtonClick={() => alert('add to wishlist!')}
                />
            </div>
            <Carousel
                list={roomData.images}
                paginationType='fraction'
                imageStyleOverride={{
                    height: '260px',
                }}
            />
        </div>
    );
};

export default ImageCarouselRD;
