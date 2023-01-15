const connectDB = require('./dbconnection');
require('dotenv/config');

const express = require('express');
const app = express();

const bodyparser = require('body-parser');
const cors = require('cors')
const UserRoute = require('./userRoute');
const ProjectRoute = require('./projectRoute');


connectDB();



app.use(cors());
app.use(bodyparser.json());


app.use('/users', UserRoute);

app.use('/projects', ProjectRoute);


app.listen(3000, () => {
    console.log('Server started on port 3000');
});



