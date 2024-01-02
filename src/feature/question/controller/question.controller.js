import QuestionRepository from "../models/question.repository.js";

// Controller handling operations related to questions
export default class QuestionController{
    constructor(){
        this.questionRepository = new QuestionRepository();
    }

    // Creates a new question
    async createQuestion(req, res){
        try{
            const {title} = req.body;
            
            // Calls the repository method to create a question
            const question = await this.questionRepository.createQuestion(title);
            return res.status(200).send('Question created successfully!'+question);
        }catch(err){
            console.log(err);
            res.status(400).send("Something went wrong");
        }
    }

    // Deletes a question by ID
    async deleteQuestion(req, res){
        try{
            const Qid = req.params.id;

            // Calls the repository method to delete a question
            const result = await this.questionRepository.deleteQuestion(Qid);
            if(!result){
                return res.status(400).send('Question not found!');
            }
            res.status(200).send('Question deleted succesfully!');
        }catch(err){
            console.log(err);
            res.status(400).send("Something went wrong");
        }
    }

    // Retrieves a question by its ID
    async getQuestion(req, res){
        try{
            const Qid = req.params.id;

            // Calls the repository method to get a question
            let question = await this.questionRepository.getQuestion(Qid);
            res.status(200).send(question);
        }catch(err){
            console.log(err);
            res.status(400).send("Something went wrong");
        }
    }

    // Adds an option to a question
    async addOption(req, res){
        try{
            const Qid = req.params.id;
            const {option} = req.body;

            // Calls the repository method to add an option
            const newOption = await this.questionRepository.addOption(Qid, option);
            res.status(200).send('Option added successfully!' + newOption);
        }catch(err){
            console.log(err);
            res.status(400).send("Something went wrong");
        }
    }
}