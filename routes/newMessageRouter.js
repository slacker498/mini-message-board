import express from 'express';
import { postMessage } from '../controllers/messagesController.js';

const newMessageRouter = express.Router();

newMessageRouter.get('/', (req, res) => {
    res.render('form', {title: "Mini Messageboard"})
});

newMessageRouter.post('/', postMessage);

export {newMessageRouter};