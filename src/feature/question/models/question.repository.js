import mongoose from "mongoose";
import {QuestionModel} from './question.schema.js';
import {OptionModel} from '../../option/models/option.schema.js';

// Repository handling operations related to questions in the database
export default class QuestionRepository{

    // Method to create a new question
    async createQuestion(title){
        try{
            // Create a new question using the provided title
            let questionModel = new QuestionModel({title});

            // Save the new question
            await questionModel.save();

            // Return the created question
            return questionModel;
        }catch(err){
            console.log('Error in creating question: ', err);
        }
    }

    // Method to add an option to a question
    async addOption(Qid, option){
        try{
            // Find the question by its ID
            let question = await QuestionModel.findById(Qid);

            // Check if question exists
            if(!question){
                throw new Error('Question not found!');
            }

            // Create a new option with the provided text
            const newOption = new OptionModel({text: option});

            // Save the new option
            await newOption.save();

            // Save link_to_vote for the option
            const id = newOption._id;
            newOption.link_to_vote = `http://localhost:3000/api/options/${id}/add_vote`;
            await newOption.save();

            // Add the option to the question's options array
            question.options.push(newOption);

            // Save the updated question
            await question.save();

            // Return the newly added option
            return newOption;
        }catch(err){
            console.log('Error adding option: ', err);
        }
    }

    // Method to delete a question
    async deleteQuestion(Qid){
        try{
            // Find the question by its ID
            let question = await QuestionModel.findById(Qid);

            // Check if question exists
            if(!question){
                throw new Error('Question not found!');
            }
            
            // If some options have votes
            console.log('question options: ', question.options.length);
            if(question.options.length > 0){
                throw new Error('Question having votes to its options can\'t be deleted');
            }else{
                // delete the question
                const result = await QuestionModel.findByIdAndDelete(Qid);
                return result;
            }
        }catch(err){
            console.log('Error deleting the question: ', err);
        }
    }

    // Method to get a question by its ID
    async getQuestion(Qid){
        try{
            // Find the question by its ID
            const question = await QuestionModel.findById(Qid);

            // Return the found question
            return question;
        }catch(err){
            console.log('Error getting the question: ', err);
        }
    }
}