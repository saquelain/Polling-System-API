import mongoose from "mongoose";

// Define the schema for the Option model
const OptionSchema = new mongoose.Schema({
    text: {
        type: String    // Represents the text of the option
    },
    votes: {
        type: Number    // Represents the count of votes for the option
    },
    link_to_vote: {
        type: String    // Represents the link to vote for the option
    }
});

// Create the Option model using the defined schema
export const OptionModel = mongoose.model('Option', OptionSchema);