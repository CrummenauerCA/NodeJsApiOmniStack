const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/omnistack', {
    useNewUrlParser: true
}).catch(error => {
    console.log('Deu ruim', error);
});

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Server started on port 3000');
});