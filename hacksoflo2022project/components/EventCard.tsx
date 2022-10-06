import React from 'react';
import { Card, Button } from '@mui/material';
import EventCardInterface from '../interfaces/EventCardInterface';

const EventCard:React.FC<EventCardInterface> = ({
    isEventSavedByUser, isUserRegisteredForEvent, isEventOnline,
    description, location, date, tags
}) => {
    return (
        <Card>

        </Card>
    );
};

export default EventCard;