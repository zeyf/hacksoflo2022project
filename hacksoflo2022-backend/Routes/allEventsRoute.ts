import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const DB = require('../dbConnection');
const Router = express.Router();

Router.get('/all', (req: any, res: any) => {
    const allEventsQuery = `SELECT * FROM eventinformation;`;
    DB.query(allEventsQuery, (err:any, results: any) => {

        if (err) {
            console.log(err);
            res.send({ hasErr: true, err });
        } else {
            res.send({ hasErr: false, results });
        };

    });
});

const dummyData = {
    title: "Apple Event",
    description: "See the new tech!",
    isEventOnline: true,
    date: {
        month: "September",
        day: 10,
        year: 2022
    },
    location: {
        streetAddress: "N//A",
        zipCode: "N//A",
        state: "N//A",
        city: "N//A",
        zoomLink: "https:////zoom.us"
    },
    tags: [
        {
            type: "Company",
            value: "Apple"
        }
    ]
};



Router.post('/create', (req: any, res: any) => {
    const {
        title, description, isEventOnline,
        date: { month, day, year },
        location: { streetAddress, zipCode, state, city, zoomLink },
        tags
    } = req.body;

    const uid = uuidv4();
    const tagsMultiRowInsertFormat = tags.map(({ type, value }:{ type: string, value: string }) => `(${uid},${type}, ${value})`).join(", ");

    /*
    const createEventQuery = `INSERT INTO eventinformation (uid, title, about, isEventOnline, mm, dd, yr, streetAddress, zipCode, state, city, zoomLink) VALUES (\"${uid}\", \"${title}\", \"${description}\", ${isEventOnline}, \"${month}\", ${day}, ${year}, \"${streetAddress}\", ${zipCode}, \"${state}\", \"${city}\", \"${zoomLink}\");`;
    const createTagsQuery = `INSERT INTO eventtags (uid, typeOf, label) VALUES ${tagsMultiRowInsertFormat};`;

    DB.query(createEventQuery, (err:any, results:any) => {
        if (err) {
            console.log(err);
            res.send({ hasErr: true, err });
        } else {
            console.log(results);
            res.send({ hasErr: false, results });
        };
    });


    DB.query(createTagsQuery, (err:any, results:any) => {
        if (err) {
            console.log(err);
            res.send({ hasErr: true, err });
        } else {
            console.log(results);
            res.send({ hasErr: false, results });
        };
    });
    */

});

module.exports = Router;