import express from "express";
import OptionController from "../controller/option.controller.js";

// initialize express router
const optionRouter = express.Router();

// Create an instance of the OptionController
const optionController = new OptionController();

// Define routes and link them to controller methods

// Route to delete an option by ID
optionRouter.delete("/:id/delete", (req, res, next) => {
    optionController.deleteOption(req, res);
});

// Route to add a vote to an option by ID
optionRouter.post('/:id/add_vote', (req, res) => {
    optionController.addVote(req, res);
})

// Export the configured optionRouter
export default optionRouter;