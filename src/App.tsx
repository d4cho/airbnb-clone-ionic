import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import { CreateAnimation } from '@ionic/react';

/* Pages */
import ExplorePage from './pages/ExplorePage';
import WishlistsPage from './pages/WishlistsPage';
import TripsPage from './pages/TripsPage';
import InboxPage from './pages/InboxPage';
import ProfilePage from './pages/ProfilePage';
import RoomDetailsPage from './pages/RoomDetailsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import RequestToBookPage from './pages/RequestToBookPage';

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
import { BiSearch } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaAirbnb } from 'react-icons/fa';
import { BiMessage } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { useAppContext } from './context/AppContext';

/* geolocation */
import { Geolocation } from '@capacitor/geolocation';

setupIonicReact();

const App: React.FC = () => {
    const { setGeolocation } = useAppContext();

    useEffect(() => {
        const printCurrentPosition = async () => {
            const coordinates = await Geolocation.getCurrentPosition();
            const currentGeolocation = {
                latitude: coordinates.coords.latitude,
                longitude: coordinates.coords.longitude,
            };
            setGeolocation(currentGeolocation);
        };
        printCurrentPosition();
    }, [setGeolocation]);

    const iconStyle = {
        fontSize: 26,
        padding: '1.5px 0',
    };

    return (
        <IonApp>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path='/'>
                            <Redirect to='/explore' />
                        </Route>
                        <Route exact path='/explore'>
                            <ExplorePage />
                        </Route>
                        <Route exact path='/wishlists'>
                            <WishlistsPage />
                        </Route>
                        <Route exact path='/trips'>
                            <TripsPage />
                        </Route>
                        <Route exact path='/inbox'>
                            <InboxPage />
                        </Route>
                        <Route exact path='/profile'>
                            <ProfilePage />
                        </Route>
                        <Route path='/rooms/:id'>
                            <RoomDetailsPage />
                        </Route>
                        <Route exact path='/search-results'>
                            <SearchResultsPage />
                        </Route>
                        <Route exact path='/book/:id'>
                            <RequestToBookPage />
                        </Route>
                    </IonRouterOutlet>

                    <IonTabBar slot='bottom'>
                        <IonTabButton tab='explore' href='/explore'>
                            <BiSearch style={iconStyle} />
                            <IonLabel>Explore</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab='wishlists' href='/wishlists'>
                            <AiOutlineHeart style={iconStyle} />
                            <IonLabel>Wishlists</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab='trips' href='/trips'>
                            <FaAirbnb style={iconStyle} />
                            <IonLabel>Trips</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab='inbox' href='/inbox'>
                            <BiMessage style={iconStyle} />
                            <IonLabel>Inbox</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab='profile' href='/profile'>
                            <CgProfile style={iconStyle} />
                            <IonLabel>Profile</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </IonApp>
    );
};

export default App;
