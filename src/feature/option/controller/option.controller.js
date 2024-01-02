import OptionRepository from "../models/option.repository.js";

// Controller handling operations related to options
export default class OptionController{
    constructor(){
        this.optionRepository = new OptionRepository();
    }

    // Deletes an option by ID
    async deleteOption(req, res){
        try{
            const Optid = req.params.id;
            
            // Calls the repository method to delete an option
            const option = await this.optionRepository.deleteOption(Optid);
            if(!option){
                return res.status(400).send('Option not found');
            }
            res.status(200).send('Option deleted successfully!'+ option);
        }catch(err){
            console.log(err);
            res.status(400).send("Something went wrong");
        }
    }

    // Adds a vote to an option
    async addVote(req, res){
        try{
            const Optid = req.params.id;
            
            // Calls the repository method to add a vote to the option
            await this.optionRepository.addVote(Optid);
            
            res.status(200).send('Vote added!');
        }catch(err){
            console.log(err);
            res.status(400).send("Something went wrong");
        }
    }
}