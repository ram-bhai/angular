const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Ram:ram0Ram@cluster0.hydgd.mongodb.net/BookmyMeal?retryWrites=true&w=majority');
const indexRouter = require('./routes/admin.route');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", indexRouter);

app.listen(port, () => {
    console.log('Server is running on port no. :- ' + port);
})