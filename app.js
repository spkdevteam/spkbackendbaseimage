const express = require('express');
<<<<<<< HEAD
const { mainRouter } = require('./routes/main.routes.js');
=======
const {mainRouter} = require('./routes/main.routes.js');
>>>>>>> new_pragya
const dotenv = require("dotenv");
const cors = require("cors");
const errorHandler = require('./errorHandler/globalErrorHandler.js');

dotenv.config();

const app = express();
const port = 8092;

const corsOptions = {
<<<<<<< HEAD
    origin: "*",
=======
    origin: "*", // Allows requests from all origins
>>>>>>> new_pragya
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
<<<<<<< HEAD

app.get("/test", (req, res)=>{
    res.json({ success: true, message: "checking wheather branching is working or not"})
})

=======
>>>>>>> new_pragya
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
