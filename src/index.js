const express = require('express');
const mongo = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongo.connect('mongodb+srv://user:fulano@cluster0-pffwf.mongodb.net/test?retryWrites=true&w=majority',
{   useUnifiedTopology: true ,
    useNewUrlParser: true 
}
);

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);