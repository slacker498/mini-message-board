import { messages } from "../models/messages.js";

const postMessage = (req, res) => {
    messages.push(
        { 
            text: req.body.message, 
            user: req.body.author, 
            added: new Date() 
        }
    );
    res.redirect('/');
}

const getMessageById = id => {
    if (Number(id) < messages.length)
    return messages[Number(id)];
}

export { postMessage, getMessageById };