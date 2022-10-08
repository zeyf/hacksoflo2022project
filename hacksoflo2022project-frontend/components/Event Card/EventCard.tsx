import React from 'react';
import { Card, Button } from '@mui/material';
import EventCardInterface from '../../interfaces/EventCardInterface';
import Link from 'next/link';

const EventCard:React.FC<EventCardInterface> = ({
    uid, tags, title, about, isEventOnline
}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{ title }</div>
                <p className="text-gray-700 text-base">
                    { about }
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {
                    isEventOnline ? 
                    <strong>
                        In Person
                    </strong>
                    :
                    <strong>
                        Online
                    </strong>
                }
            </div>
        </div>
    );
};

export default EventCard;