import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import {
    DATABASE,
    MAX_JSON_SIZE,
    PORT,
    REQUEST_NUMBER,
    REQUEST_TIME,
    URL_ENCODE,
    WEB_CACHE
} from "./app/config/config.js";
import router from "./routes/api.js";

const app = express();

// App use default middlewares
app.use(cors());
app.use(express.json({limit: MAX_JSON_SIZE}));
app.use(express.urlencoded({ extended: URL_ENCODE}));
app.use(cookieParser());
app.use(helmet());

// App use limiter
const limiter = rateLimit({windowMs: REQUEST_TIME, max: REQUEST_NUMBER});
app.use(limiter);

// Cache
app.set('etg', WEB_CACHE);

// Database connection
mongoose.connect(DATABASE, {autoIndex: true}).then(() => {
    console.log('MongoDB connected!');
}).catch((err) => {
    console.log('MongoDB disconnected!');
    console.log(err.toString());
});

// Base url
app.use('/api/v1', router);

// Not Found
app.use("*", (req, res) => {
    res.status(404).json({status: 'fail', data: 'Not Found!'});
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});