import axios from 'axios';

import Navbar from '../../components/Navbar/Navbar';
import React, { useState } from 'react';
import EventCardInterface from '../../interfaces/EventCardInterface';
const CreateEventPage = () => {

    const [ eventData, setEventData ] = useState<EventCardInterface>({
        uid: "",
        title: "",
        about: "",
        mm: "",
        dd: "",
        yr: "",
        isEventOnline: 0,
        streetAddress: "",
        city: "",
        state: "",
        zoomLink: "",
        tags: "",
        zipCode: ""
    });

    const createEvent = async () => {
        axios.post("http://localhost:10501/events/create",
            eventData
        ).then((r:any) => r.json()).then((r:any) => {
            window.location.replace('http://localhost:3000/');
        })
    };

    console.log(eventData);

    return (
        <div>
            <Navbar />
            <div className="w-screen h-[125vh] bg-white text-black flex items-center justify-center">
                <div className="w-[65-vw] h-[125vh] bg-white flex flex-col">
                    <h1 className="text-3xl">
                        Create an Event
                    </h1>
                    <div className="flex flex-col">
                        <div>
                            <div>

                            <div className="my-10">
                            <span>
                                    {`Event is Online:\t`}
                                </span>
                                <input className="mx-10" type="checkbox"
                                    onChange={() => {
                                        setEventData({ ...eventData, isEventOnline: eventData.isEventOnline ? 0 : 1 });
                                    }}
                                    />
                            </div>
                            <div className="my-10">
                                <span>
                                    Event Date
                                </span>
                                <select className="bg-white mx-4" onChange={(e:any) => { setEventData({ ...eventData, mm: e.target.value }) }}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select>
                                <select className="bg-white mx-4" onChange={(e:any) => { setEventData({ ...eventData, dd: e.target.value }) }}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>26</option>
                                    <option>27</option>
                                    <option>28</option>
                                    <option>29</option>
                                    <option>30</option>
                                    <option>31</option>
                                </select>
                                <select className="bg-white mx-4" onChange={(e:any) => { setEventData({ ...eventData, yr: e.target.value }) }}>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                </select>
                            </div>
                                <div className="flex items-center w-[40vw] justify-around">
                                    <span className="flex items-center my-10">
                                        Title
                                    </span>
                                    <input className="mx-8 px-6 py-2 bg-white border-2 border-gray-300 rounded-md"
                                        onChange={(e:any) => {
                                            setEventData({ ...eventData, title: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="flex items-center w-[40vw] justify-around">

                                    <span className="flex items-center my-10">
                                        About
                                    </span>
                                    <textarea placeholder="About the event..." className="mx-8 px-6 py-2 bg-white border-2 border-gray-300 rounded-md"
                                        onChange={(e:any) => {
                                            setEventData({ ...eventData, about: e.target.value });
                                        }}
                                    />
                                </div>
                            </div>
                            { eventData.isEventOnline === 0 ?
                            <div>
                            <div className="flex items-center w-[40vw] justify-around">
                                    <span className="flex items-center my-10">
                                        Address
                                    </span>
                                    <input className="mx-8 px-6 py-2 bg-white border-2 border-gray-300 rounded-md"
                                        onChange={(e:any) => {
                                            setEventData({ ...eventData, streetAddress: e.target.value });
                                        }}
                                    />
                            </div>
                                <div className="flex items-center w-[40vw] justify-around">
                                    <span className="flex items-center my-10">
                                        City
                                    </span>
                                    <input className="mx-8 px-6 py-2 bg-white border-2 border-gray-300 rounded-md"
                                        onChange={(e:any) => {
                                            setEventData({ ...eventData, city: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="flex items-center w-[40vw] justify-around">
                                    <span className="flex items-center my-10">
                                        State
                                    </span>
                                    <input className="mx-8 px-6 py-2 bg-white border-2 border-gray-300 rounded-md"
                                        onChange={(e:any) => {
                                            setEventData({ ...eventData, state: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="flex items-center w-[40vw] justify-around">
                                    <span className="flex items-center my-10">
                                        Zip Code
                                    </span>
                                    <input className="mx-8 px-6 py-2 bg-white border-2 border-gray-300 rounded-md"
                                        onChange={(e:any) => {
                                            setEventData({ ...eventData, zipCode: e.target.value });
                                        }}
                                    />
                                </div>
                            </div>
                            :
                            <div>
                                <div className="flex items-center w-[40vw] justify-around">
                                    <span className="flex items-center my-10">
                                        Zoom Link
                                    </span>
                                    <input className="mx-8 px-6 py-2 bg-white border-2 border-gray-300 rounded-md"
                                        onChange={(e:any) => {
                                            setEventData({ ...eventData, zoomLink: e.target.value });
                                        }}
                                    />
                                </div>
                            </div>
                            }
                        </div>
                    </div>

                    <button className="rounded-md px-4 py-2 my-10 bg-blue-500 text-white w-[200px]"
                        onClick={() => {
                            createEvent();
                        }}
                    >
                        Create Event
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateEventPage;