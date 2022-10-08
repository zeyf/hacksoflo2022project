export interface EventTagDataInterface {
    type: string,
    data: string
};

export interface EventLocationDataInterface {
    streetAddress: string,
    zipCode: string,
    state: string,
    city: string,
    zoomLink?: string
};

export interface EventDateInterface {
    month: 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December',
    day: string,
    year: string
};