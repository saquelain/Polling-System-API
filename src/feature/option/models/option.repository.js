import mongoose from "mongoose";
import {OptionModel} from './option.schema.js'

// Repository handling operations related to options in the database
export default class OptionRepository{

    // Method to delete an option by its ID
    async deleteOption(Optid){
        try{
            // Find the option by its ID
            const option = await OptionModel.findById(Optid);
            
            // Check if option exists
            if(!option){
                throw new Error('Option not found!');
            }

            // Check if the option has any votes
            if(!option.votes){
                // If no votes, delete the option
                await OptionModel.findByIdAndDelete(Optid);
                return option;
            }else{
                throw new Error('Options with votes can\'t be deleted');
            }
        }catch(err){
            console.log('Error in deleting option: ', err);
        }
    }

    // Method to add a vote to an option
    async addVote(Optid){
        try{
            // Find the option by its ID
            let option = await OptionModel.findById(Optid);

            // Check if option exists
            if(!option){
                throw new Error('Option not found!');
            }

            // Increment the vote count or initialize if it's the first vote
            if(!option.votes){
                option.votes = 1;
            }else{
                option.votes++;
            }

            // Save the updated option with the new vote count
            await option.save();
        }catch(err){
            console.log('Error in adding vote to option: ', err);
        }
    }
}