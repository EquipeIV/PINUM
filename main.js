import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import bodyParser from 'body-parser';

//load config
dotenv.config({ path: './config/config.env' });


//run server
const MAIN = express();
const PORT = process.env.PORT;

MAIN.listen(PORT, console.log(`Application running in ${process.env.NODE_ENV} at port ${PORT} (localhost)`));

MAIN.use(bodyParser.urlencoded({ extended: true }));
MAIN.use(bodyParser.json());
MAIN.use(router);
