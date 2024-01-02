import mongoose from "mongoose";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Retrieve the MongoDB connection URL from environment variables
const url = process.env.DB_URL;

// Function to establish a connection to MongoDB using Mongoose
export const connectUsingMongoose = async () => {
    try{
        // Connect to MongoDB using Mongoose
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        // Log a success message upon successful connection
        console.log("Mongodb is connected using mongoose");
    }catch(err){
        // Log an error message if there's an issue with the connection
        console.log("Error while connect to db"+err);
    }

}