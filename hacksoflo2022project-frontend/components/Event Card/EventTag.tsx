import React from 'react';
import Link from 'next/link';

const EventCard = ({ typeOf, label }:any) => {

    return (
        <Link href={`/tags/${typeOf}/${label}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{ label }
        </Link>
    );
};

export default EventCard;