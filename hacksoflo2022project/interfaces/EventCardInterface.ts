import { EventDateInterface, EventTagDataInterface, EventLocationDataInterface } from "./GeneralInterfaces";

export default interface EventCardInterface {
    uid: string,
    isEventSavedByUser?: boolean,
    isUserRegisteredForEvent?: boolean,
    isEventOnline: boolean,
    description: string,
    title: string,
    tags: EventTagDataInterface[],
    date: EventDateInterface,
    location: EventLocationDataInterface  
};