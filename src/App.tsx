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
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

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
                    <Route exact path='/Explore'>
                        <Tab1 />
                    </Route>
                    <Route exact path='/Wishlists'>
                        <Tab2 />
                    </Route>
                    <Route path='/Trips'>
                        <Tab3 />
                    </Route>
                    <Route path='/Inbox'>
                        <Tab3 />
                    </Route>
                    <Route path='/Profile'>
                        <Tab3 />
                    </Route>
                    <Route exact path='/'>
                        <Redirect to='/Explore' />
                    </Route>
                </IonRouterOutlet>

                <IonTabBar slot='bottom'>
                    <IonTabButton tab='Explore' href='/Explore'>
                        <IonIcon icon={search} />
                        <IonLabel>Explore</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab='Wishlists' href='/Wishlists'>
                        <IonIcon icon={heart} />
                        <IonLabel>Wishlists</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab='Trips' href='/Trips'>
                        <FaAirbnb style={{ fontSize: 26, paddingBottom: 2 }} />
                        <IonLabel>Trips</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab='Inbox' href='/Inbox'>
                        <IonIcon icon={chatbox} />
                        <IonLabel>Inbox</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab='Profile' href='/Profile'>
                        <IonIcon icon={person} />
                        <IonLabel>Profile</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
