import express from "express";
import QuestionController from "../controller/question.controller.js";

// initialize express router
const questionRouter = express.Router();

// Create an instance of the QuestionController
const questionController = new QuestionController();

// Define routes and link them to controller methods

// Route to create a new question
questionRouter.post("/create", (req, res, next) => {
    questionController.createQuestion(req, res);
});

// Route to add an option to a specific question by ID
questionRouter.post('/:id/options/create', (req, res) =>{
    questionController.addOption(req, res);
});

// Route to delete a question by ID
questionRouter.delete('/:id/delete', (req, res) => {
    questionController.deleteQuestion(req, res);
});

// Route to get a question by its ID
questionRouter.get('/:id', (req, res) => {
    questionController.getQuestion(req, res);
});

// Export the configured questionRouter
export default questionRouter;