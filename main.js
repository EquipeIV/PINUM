import express from 'express';
import dotenv from 'dotenv';

//load config
dotenv.config({ path: './config/config.env' });


//run server
const MAIN = express();
const PORT = process.env.PORT;


MAIN.listen(PORT, console.log(`Application running in ${process.env.NODE_ENV} at port ${PORT} (localhost)`));

MAIN.get('/', (req, resp) => {
    resp.send ('HOME');
});

MAIN.get('/user', (req, resp) => {
    resp.send ('USER');
});
