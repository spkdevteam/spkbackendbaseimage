const express = require('express');
const mainRouter = require('./routes/main.routes.js');
const dotenv = require("dotenv");
const cors = require("cors");
const errorHandler = require('./errorHandler/globalErrorHandler.js');

dotenv.config();

const app = express();
const port = 8092;

const corsOptions = {
    origin: "*", // Allows requests from all origins
    credentials: true,
    methods: ['GET', 'PATCH', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'x-refresh-token', 'x-user-role', 'x-verify-token'],
    optionsSuccessStatus: 204,
    preflightContinue: false,
};

app.use(cors(corsOptions));
app.use(express.json());

// Logging middleware (after CORS)
app.use((req, res, next) => {
    console.log('Request received on server');
    next();
});

app.use('/', mainRouter);

app.get("/test", (req, res)=>{
    res.json({ success: true, message: "checking wheather branching is working or not"})
})

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
