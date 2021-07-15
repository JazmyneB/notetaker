const express = require('express');
const path = require('path');
const fs = require('fs');

//Port
const PORT = process.env.PORT || 3002;

const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')
//Reads the Data file
const { notes } = require('./db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



// function createNewNote(body, notesArray){
//     //console.log(body)
//     const note = body;
//     notesArray.push(note);
//     fs.writeFileSync(path.join(__dirname, '/db/db.json'),
//     JSON.stringify({ notes: notesArray }, null, 2)
//     );

//     return note;
// }

// app.post('/api/notes', (req, res) => {
//     //set id to the note 
//     req.body.id = notes.length.toString();
//     const note = createNewNote(req.body, notes);

//     res.json(note);
// });







app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!!`);
});