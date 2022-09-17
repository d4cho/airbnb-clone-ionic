import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './InboxPage.scss';

const InboxPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Inbox</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large'>Inbox Page</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name='Inbox Page' />
            </IonContent>
        </IonPage>
    );
};

export default InboxPage;
