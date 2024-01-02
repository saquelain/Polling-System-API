import mongoose from "mongoose";

// Define the schema for the Question model
const QuestionSchema = new mongoose.Schema({
    title: {
        type: String    // Represents the title of the question
    },
    options: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Option'   // References the 'Option' model for populating options
        }
    ]
});

// Create the Question model using the defined schema
export const QuestionModel = mongoose.model('Question', QuestionSchema);