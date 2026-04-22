import express from 'express';
// import { postMessage } from '../controllers/messagesController.js'; // deprecated
import messagesDBController from '../controllers/messagesDBController.js';
import { body } from 'express-validator';

const newMessageRouter = express.Router();

newMessageRouter.get('/', (req, res) => {
    res.render('form', {title: "Mini Messageboard"})
});

newMessageRouter.post(
    '/',
    body('author').notEmpty().withMessage("Author's name must be filled!").trim().isLength({max: 255}).withMessage("Author name must be at most 255 charcters!"),
    body('message').notEmpty().withMessage("Text message must have at least one character!").trim(),
    messagesDBController.postMessage,
);

export {newMessageRouter};