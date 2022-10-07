import cors from 'cors';
import express from 'express';
const allEventsRoute = require('./Routes/allEventsRoute');
const DB = require("./dbConnection");
const expressApp = express();
const PORT = 10500;

expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(cors());

expressApp.use('/api/events', allEventsRoute);

expressApp.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}.`);
});