const express = require('express');

//Port
const PORT = process.env.PORT || 3002;

const app = express();

const { notes } = require('./db/db');


app.get('/api/notes', (req, res) => {
    res.send("Hellos!");
})







app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!!`);
});