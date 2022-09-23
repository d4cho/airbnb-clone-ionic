import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import './RoomDetailsPage.scss';
import { roomsData } from '../assets/data/rooms-data';
import { useParams } from 'react-router';
import ImageCarouselRD from '../components/organisms/RoomDetailsPage/ImageCarouselRD/ImageCarouselRD';
import DetailsRD from '../components/organisms/RoomDetailsPage/DetailsRD/DetailsRD';
import BottomReserveBar from '../components/molecules/RoomDetailsSections/BottomReserveBar/BottomReserveBar';

const RoomDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const roomData = roomsData.filter((item) => item.id === id)[0];

    return (
        <IonPage className='RoomDetailsPage_container'>
            <IonContent className='RoomDetailsPage_content' fullscreen>
                <ImageCarouselRD roomData={roomData} />
                <div style={{ paddingBottom: 100 }}>
                    <DetailsRD roomData={roomData} />
                </div>
                <div
                    slot='fixed'
                    style={{
                        bottom: '0px',
                        width: '100%',
                    }}
                >
                    <BottomReserveBar roomData={roomData} />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default RoomDetailsPage;
