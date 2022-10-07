import cors from 'cors';
import express from 'express';
const eventsRoute = require('./Routes/eventsRoute');
const DB = require("./dbConnection");
const expressApp = express();
const PORT = 10501;

expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(cors());

expressApp.use('/api/events', eventsRoute);

expressApp.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}.`);
});