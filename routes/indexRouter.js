import express from 'express';
// import {messages} from '../models/messages.js' // deprecated
import messagesDBController from '../controllers/messagesDBController.js';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
    const messages = await messagesDBController.getAllMessages();
    res.render('index', {title: "Mini Messageboard", messages: messages});
});

export {indexRouter};