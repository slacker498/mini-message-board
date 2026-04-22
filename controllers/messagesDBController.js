import pool from "../models/pool.js";
import { body, validationResult, matchedData } from "express-validator";

const postMessage = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render("400", { errors: errors.array() });
    }
    const { author, message } = matchedData(req);
    const added = new Date();

    await pool.query("INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)", [message, author, added.toISOString()]);
    res.redirect('/');
}

const getAllMessages = async () => {
    const {rows} = await pool.query("SELECT * FROM messages");
    return rows;
}

const getMessageById = async id => {
    const {rows} = await pool.query("SELECT COUNT(id) FROM messages");
    const msgCnt = rows[0].count;

    if (Number(id) <= msgCnt) {
        const {rows} = await pool.query("SELECT * FROM messages WHERE id = " + Number(id));
        return rows[0];
    }
}

export default { postMessage, getMessageById, getAllMessages};