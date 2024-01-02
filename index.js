import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import questionRouter from './src/feature/question/routes/question.routes.js';
import optionRouter from './src/feature/option/routes/option.routes.js'
import { connectUsingMongoose } from './src/config/mongooseConfig.js';

// Creating an Express server instance
const server = express();

// CORS Policy configuration allowing access from all origins
var corsOptions = {
    origin: '*'
};

// Applying middleware for CORS handling and parsing JSON requests
server.use(cors(corsOptions));
server.use(bodyParser.json());

// Routing for question and option endpoints
server.use('/api/questions', questionRouter);
server.use('/api/options', optionRouter);

// Default route for the root endpoint
server.get('/', (req, res) => {
    res.send('Welcome to Polling System Api Application');
})

// Middleware to handle 404 requests
server.use((req, res) => {
    res.status(404).send("API not found.");
});

// Starting the server on port 3000 and establishing connection using Mongoose
server.listen(3000, ()=>{
    console.log("server is listening on port: 3000");
    connectUsingMongoose(); // Connects to the MongoDB database using Mongoose
}); 