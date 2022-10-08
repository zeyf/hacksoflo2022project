import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const Navbar = () => {

    const [ searchInput, setSearchInput ] = useState<string>("");

    return (
        <div className="bg-white w-screen h-[7.5vh] py-4 text-black flex items-center justify-between border-b-[1px] border-blue-500">
            <h1 className="font-bold mx-10 text-2xl">
                EVENTLY
            </h1>
            <div className="w-[45vw] flex items-center justify-around">
                <Link href="/" className="w-30 mx-10">
                    Home
                </Link>
                <Link href="/createevent" className="w-30 mx-10">
                    Create Event
                </Link>
                <Link href="/about" className="w-30 mx-10">
                    About Us
                </Link>
                <input className="mx-8 px-6 py-2 bg-white border-2 border-gray-300 rounded-md" placeholder="Search an event"
                    onChange={(event:any) => {
                        setSearchInput(event.target.value);
                    }}
                />

                <Link href={`/search/${searchInput}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </Link>

            </div>
        </div>
    );
};

export default Navbar;