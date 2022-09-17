import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export function AppContextProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
    // const [scrollSpeed, setScrollSpeed] = useState('slow');
    const [scrollDirection, setScrollDirection] = useState('down');

    // scroll animations code starts
    React.useEffect(() => {
        const onScroll = () => {
            if (offset < window.pageYOffset) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }

            // if (Math.abs(window.pageYOffset - offset) > 25) {
            //     setScrollSpeed('fast');
            // } else {
            //     setScrollSpeed('slow');
            // }
            setOffset(window.pageYOffset);
        };

        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [offset]);
    // scroll animations code ends

    console.log(offset);

    return (
        <AppContext.Provider
            value={{
                isModalOpen,
                setIsModalOpen,
                searchData,
                setSearchData,
                resetSearchData,
                offset,
                setOffset,
                // scrollSpeed,
                // setScrollSpeed,
                scrollDirection,
                setScrollDirection,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
