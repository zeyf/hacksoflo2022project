import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const DB = require('../dbConnection');
const Router = express.Router();

// Created the get all route for events
Router.get('/all', (req: any, res: any) => {
    // SQL query for selection of all events
    const allEventsQuery = `SELECT * FROM eventinformation;`;

    // Peforms the SQL SELECT query to retrieve all events
    DB.query(allEventsQuery, (err:any, results: any) => {

        // If there is an error, send it
        if (err) {
            res.send({ hasErr: true, err });
        // Return the results
        } else {
            res.send({ hasErr: false, results });
        };

    });
});

// Route creates the an event with POSTED information
Router.post('/create', (req: any, res: any) => {

    // Destructure all of the required information from the body
    const {
        title, description, isEventOnline,
        date: { month, day, year },
        location: { streetAddress, zipCode, state, city, zoomLink },
        tags
    } = req.body;

    // Generate a unique identifier for the event for low-collision joining on MySQL
    const uid = uuidv4();

    // Query for creating a particular event
    const createEventQuery = `INSERT INTO eventinformation (uid, title, about, isEventOnline, mm, dd, yr, streetAddress, zipCode, state, city, zoomLink, tags) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);`;
    // Query for creating a tags entry specific to a particular event
    const createTagsQuery = `INSERT INTO eventtags (uid, typeOf, label) VALUES (?,?,?);`;

    // Databse query for the creation of the event with all missing value insertions done
    DB.query(createEventQuery, [ uid, title, description, isEventOnline, month, day, year, streetAddress, zipCode, state, city, zoomLink, JSON.stringify(tags) ],  (err:any, results:any) => {

        // If there is an error, send it
        if (err) {
            res.send({ hasErr: true, err });
        } else {
            // Iterate over all of the tags for creation and insertion into eventtags table while being tied to the current event.
            for (const { type, value } of tags) {
                DB.query(createTagsQuery, [ uid, type, value ], (err:any, results:any) => {

                    // If there is an error, send it
                    if (err) {
                        res.send({ hasErr: true, err });
                    } else {
                    // Return the results
                        res.send({ hasErr: false, results });
                    };

                });
            };
        };

    });
}); 


Router.get('/search/:searchTerm', (req: any, res: any) => {

    // get the params
    const { params: { searchTerm } } = req;

    // Query for the regex search on event title or description query
    const eventTitleOrDescriptionQuery = `SELECT * FROM eventinformation WHERE eventinformation.title LIKE \"%${searchTerm}%\" or eventinformation.about LIKE \"%${searchTerm}%\";`;
    
    // Query for the event tags by event UID
    const getEventTagsQuery = `SELECT typeOf, label FROM eventtags WHERE uid = ?;`
    DB.query(eventTitleOrDescriptionQuery,  (err: any, results: any) => {
        // If there is an error, send it
        if (err) {
            res.send({ hasErr: true, err });
        // Return results
        } else {
            res.send({ hasErr: false, results });
        };
    });

});

module.exports = Router;