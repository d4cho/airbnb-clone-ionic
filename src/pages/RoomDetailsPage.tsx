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

const RoomDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const roomData = roomsData.filter((item) => item.id === id)[0];

    return (
        <IonPage className='RoomDetailsPage_container'>
            <IonContent className='content' fullscreen>
                <ImageCarouselRD roomData={roomData} />
                <DetailsRD roomData={roomData} />
            </IonContent>
        </IonPage>
    );
};

export default RoomDetailsPage;
