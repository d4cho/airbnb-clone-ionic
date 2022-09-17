import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './TripsPage.scss';

const TripsPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Trips</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large'>Trips Page</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name='Trips Page' />
            </IonContent>
        </IonPage>
    );
};

export default TripsPage;
