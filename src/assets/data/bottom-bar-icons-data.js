import { BiSearch } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaAirbnb } from 'react-icons/fa';
import { BiMessage } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

export const bottomBarIcons = [
    {
        icon: <BiSearch />,
        text: 'Explore',
        url: '/',
    },
    {
        icon: <AiOutlineHeart />,
        text: 'Wishlists',
        url: 'wishlists',
    },
    {
        icon: <FaAirbnb />,
        text: 'Trips',
        url: 'trips',
    },
    {
        icon: <BiMessage />,
        text: 'Inbox',
        url: 'inbox',
    },
    {
        icon: <CgProfile />,
        text: 'Profile',
        url: 'profile',
    },
];
