import React from 'react';
import Link from 'next/link';
import { EventTagDataInterface } from '../../interfaces/GeneralInterfaces';

const EventTag:React.FC<EventTagDataInterface> = ({ type, data }) => {
    return (
        <Link className={`py-4 px-8 bg-blue-500 text-white`} href={`/events/${type}/${data}`}>
            { data }
        </Link>
    );
};

export default EventTag;