import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './WishlistsPage.scss';

const WishlistsPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Wishlists</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large'>Wishlists Page</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name='Wishlists Page' />
            </IonContent>
        </IonPage>
    );
};

export default WishlistsPage;
