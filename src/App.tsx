import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { heart, chatbox, search, person } from 'ionicons/icons';

/* Pages */
import ExplorePage from './pages/ExplorePage';
import WishlistsPage from './pages/WishlistsPage';
import TripsPage from './pages/TripsPage';
import InboxPage from './pages/InboxPage';
import ProfilePage from './pages/ProfilePage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Icons */
import { FaAirbnb } from 'react-icons/fa';

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path='/explore'>
                        <ExplorePage />
                    </Route>
                    <Route exact path='/wishlists'>
                        <WishlistsPage />
                    </Route>
                    <Route path='/trips'>
                        <TripsPage />
                    </Route>
                    <Route path='/inbox'>
                        <InboxPage />
                    </Route>
                    <Route path='/profile'>
                        <ProfilePage />
                    </Route>
                    <Route exact path='/'>
                        <Redirect to='/explore' />
                    </Route>
                </IonRouterOutlet>

                <IonTabBar slot='bottom'>
                    <IonTabButton tab='explore' href='/explore'>
                        <IonIcon icon={search} />
                        <IonLabel>Explore</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab='wishlists' href='/wishlists'>
                        <IonIcon icon={heart} />
                        <IonLabel>Wishlists</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab='trips' href='/trips'>
                        <FaAirbnb style={{ fontSize: 26, padding: '2px 0' }} />
                        <IonLabel>Trips</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab='inbox' href='/inbox'>
                        <IonIcon icon={chatbox} />
                        <IonLabel>Inbox</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab='profile' href='/profile'>
                        <IonIcon icon={person} />
                        <IonLabel>Profile</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
