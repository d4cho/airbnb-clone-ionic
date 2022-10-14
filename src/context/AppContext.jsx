import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export function AppContextProvider({ children }) {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    const [searchData, setSearchData] = useState({
        where: {
            destination: '',
        },
        when: {
            dateType: 'choose', // choose or flexible,
            choose: {
                startDate: '',
                endDate: '',
                plusMinusDays: 'Exact dates',
            },
            flexible: {
                stayDuration: 'week',
                whenMonthYear: [],
            },
        },
        who: {
            adults: 0,
            children: 0,
            infants: 0,
            pets: 0,
        },
    });

    const resetSearchData = () => {
        setSearchData({
            where: {
                destination: '',
            },
            when: {
                dateType: 'choose', // choose or flexible,
                choose: {
                    startDate: '',
                    endDate: '',
                    plusMinusDays: 'Exact dates',
                },
                flexible: {
                    stayDuration: 'week',
                    whenMonthYear: [],
                },
            },
            who: {
                adults: 0,
                children: 0,
                infants: 0,
                pets: 0,
            },
        });
    };

    const [offset, setOffset] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('down');

    // scroll animations code starts
    // React.useEffect(() => {
    //     const onScroll = () => {
    //         if (offset < window.pageYOffset) {
    //             setScrollDirection('down');
    //         } else {
    //             setScrollDirection('up');
    //         }
    //         setOffset(window.pageYOffset);
    //     };

    //     // clean up code
    //     window.removeEventListener('scroll', onScroll);
    //     window.addEventListener('scroll', onScroll, { passive: true });
    //     return () => window.removeEventListener('scroll', onScroll);
    // }, [offset]);
    // scroll animations code ends

    const handleContentScroll = (e) => {
        // console.log(e.detail.currentY);
        if (offset < e.detail.currentY) {
            setScrollDirection('down');
        } else {
            setScrollDirection('up');
        }
        setOffset(e.detail.currentY);
    };

    const [selectedTripDates, setSelectedTripDates] = useState([
        '2022-12-05',
        '2022-12-10',
    ]);

    const [geolocation, setGeolocation] = useState({
        latitude: '',
        longitude: '',
    });

    const [filters, setFilters] = useState({
        priceRange: {
            minPrice: 10,
            maxPrice: 1000,
        },
        typeOfPlace: {
            entirePlace: false,
            privateRoom: false,
            sharedRoom: false,
        },
        roomsAndBeds: {
            bedrooms: 'any',
            beds: 'any',
            bathrooms: 'any',
        },
        propertyType: {
            house: false,
            apartment: false,
            guestHouse: false,
            hotel: false,
        },
        amenities: {
            essentials: {
                wifi: false,
                kitchen: false,
                washer: false,
                dryer: false,
                airConditioner: false,
                heating: false,
                dedicatedWorkspace: false,
                tv: false,
                hairDryer: false,
                iron: false,
            },
            features: {
                pool: false,
                hotTub: false,
                freeParkingOnPremise: false,
                evCharger: false,
                crib: false,
                gym: false,
                bbqGrill: false,
                breakfast: false,
                indoorFireplace: false,
                smokingAllowed: false,
            },
            location: {
                beachfront: false,
                waterfront: false,
                skiInSkiOut: false,
            },
            safety: {
                smokeAlarm: false,
                carbonMonoxideAlarm: false,
            },
        },
        bookingOptions: {
            instantBook: false,
            selfCheckIn: false,
        },
        accessibilityFeatures: {
            guestEntranceAndParking: {
                stepFree: false,
                wider: false,
                stepFreePath: false,
                accessibleParking: false,
            },
            bedroom: {
                stepFree: false,
                wider: false,
            },
            bathroom: {
                stepFree: false,
                wider: false,
                showerGrabBar: false,
                toiletGrabBar: false,
                stepFreeShower: false,
                chair: false,
            },
            adaptiveEquipment: {
                hoist: false,
            },
        },
        topTierStays: {
            superhost: false,
            airbnbPlus: false,
        },
        hostLanguage: {
            english: false,
            french: false,
            german: false,
            japanese: false,
            italian: false,
            russian: false,
            spanish: false,
            chinese: false,
            arabic: false,
            hindi: false,
            portuguese: false,
            dutch: false,
            korean: false,
            punjabi: false,
            greek: false,
            hebrew: false,
            polish: false,
            swedish: false,
            norwegian: false,
            hungarian: false,
            ukrainian: false,
        },
    });

    const [creditCardInfo, setCreditCardInfo] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        postalCode: '',
        country: 'Canada',
    });

    return (
        <AppContext.Provider
            value={{
                // isModalOpen,
                // setIsModalOpen,
                searchData,
                setSearchData,
                resetSearchData,
                offset,
                setOffset,
                // scrollSpeed,
                // setScrollSpeed,
                scrollDirection,
                setScrollDirection,
                handleContentScroll,
                selectedTripDates,
                setSelectedTripDates,
                geolocation,
                setGeolocation,
                filters,
                setFilters,
                creditCardInfo,
                setCreditCardInfo,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
