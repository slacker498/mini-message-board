import express from 'express'
import path from 'node:path'

// Import routes
import { indexRouter } from './routes/indexRouter.js';
import { newMessageRouter } from './routes/newMessageRouter.js';
import { messageDetails } from './routes/messageDetails.js';

const app = express();
app.set("view engine", "ejs");
app.set('views', 'views');
app.use(express.urlencoded({ extended: true }));

// Access static files
app.use(express.static(path.dirname('public')));

// Handle route middleware fns
app.use('/', indexRouter);
app.use('/new', newMessageRouter);
app.use('/message/', messageDetails);

// Handle 404 error
app.get("/{*splat}", (req, res) => res.render('404')); 

app.listen(8000, (error) => {
    console.log("App is running on localhost at port 8000!");
    if (error) console.log(error);
})