import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EventCard from './Event Card/EventCard';

const EventsSection = () => {
    const [ events, setEvents ] = useState([]);

    const getEvents = async () => {
        axios.get("http://localhost:3000/events/all").then((r:any) => r.json()).then((r:any) => {
            setEvents(r.results);
        })
    };


    useEffect(() => {

    }, []);

    return (
        <div className="w-screen h-[65vh] bg-white flex items-center justify-center text-black">
            <div className="w-[75vw] h-[65vh] bg-white border-l-[1px] border-r-[1px] border-blue-500 flex flex-col items-center   ">
                <h2 className="font-bold font-2xl"> EVENTS </h2>
                <div className="grid grid-cols-3 gap-4">
                    {
                        events.map((d:any) => {
                            return <EventCard { ...d } />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default EventsSection;