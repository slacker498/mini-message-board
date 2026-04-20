import express from 'express';
import { getMessageById } from '../controllers/messagesController.js';

const messageDetails = express.Router();

messageDetails.get('/:messageId', (req, res) => {
    res.render('message', {title: "Mini Messageboard", message: getMessageById(req.params.messageId)})
});

export {messageDetails};