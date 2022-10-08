import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from '../../../components/Event Card/EventCard';
import Navbar from '../../../components/Navbar/Navbar';
import EventCardInterface from '../../../interfaces/EventCardInterface';

const SearchPage = ({ searchTerm }:any) => {

    const getSearch = async () => {
        axios.get(`http://localhost:10501/events/search/${searchTerm}`).then((r:any) => {
            const { data } = r;
            if (!data.hasErr) {
                console.log(data.results);
                setEvents(data.results);
            };
        });
    };

    const [ events, setEvents ] = useState<EventCardInterface[]>([]);
    useEffect(() => {
        getSearch();
    }, [  ]);



    return (
        <div>
            <Navbar/>
            
            <div className="bg-white w-screen h-[100vh] text-black">
                <div>
                    {events.length === 0 ?
                        <p>
                            There are no results with search criteria: <strong>{ searchTerm }</strong>
                        </p>
                        :
                        events.map((d:any) => {
                            return <EventCard { ...d } />
                        })
                    }
                </div>
            </div>
        </div>
    );    
};

SearchPage.getInitialProps = async({ query }:any) => {
    const { searchTerm } = query;
    return { searchTerm };
};

export default SearchPage;