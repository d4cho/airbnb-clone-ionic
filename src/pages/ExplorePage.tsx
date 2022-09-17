import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './ExplorePage.scss';

const ExplorePage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Explore</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large'>Explore Page</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name='Explore Page' />
            </IonContent>
        </IonPage>
    );
};

export default ExplorePage;
