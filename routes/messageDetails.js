import express from 'express';
// import { getMessageById } from '../controllers/messagesController.js'; // deprecated
import messagesDBController from '../controllers/messagesDBController.js';

const messageDetails = express.Router();

messageDetails.get('/:messageId', async (req, res) => {
    const message = await messagesDBController.getMessageById(req.params.messageId);
    await res.render('message', {title: "Mini Messageboard", message: message})
});

export {messageDetails};