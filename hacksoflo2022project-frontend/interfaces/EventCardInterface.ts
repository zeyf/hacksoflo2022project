import { EventDateInterface, EventTagDataInterface, EventLocationDataInterface } from "./GeneralInterfaces";

export default interface EventCardInterface {
    uid: string,
    isEventOnline: number,
    about: string,
    title: string,
    tags: string,
    mm: string,
    dd: string,
    yr: string
    streetAddress: string,
    zoomLink: string,
    city: string,
    state: string,
    zipCode: string
};