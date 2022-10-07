import React from 'react';
import { Card, Button } from '@mui/material';
import EventCardInterface from '../../interfaces/EventCardInterface';
import EventTag from './EventTag';
import Link from 'next/link';

const EventCard:React.FC<EventCardInterface> = ({
    isEventSavedByUser, isUserRegisteredForEvent, isEventOnline,
    description, title, location, date, tags, uid
}) => {

    const { streetAddress, zipcode, state, zoomLink } = location;
    const { month, day, year  } = date;

    return (
        <div>
            <div>
                <p>{ title }</p>
            </div>
            <div>
                {/* image */}
                <div>

                </div>
                <div>
                    {/* top bar with register and save button */}
                    <div>
                        <button className={`text-orange-500`} onClick={() => {

                        }}>
                            Register
                        </button>
                        <button className={`text-orange-500`} onClick={() => {

                        }}>
                            Save
                        </button>
                    </div>
                    <div>
                        {/* TAGS SECTION */}
                        {
                            tags.map(({ type, data }) => {
                                return <EventTag type={type} data={data} />
                            })
                        }
                    </div>
                    {/*  */}
                    <div>
                        <p>{ description }</p>
                        <Link href={`/events/id/${uid}`}>
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;