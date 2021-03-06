const fs = require('fs');
const path = require('path');

function filterByQuery(query, notesArray){
    let filteredResults = notesArray;
    if (query.title){
        filteredResults = filteredResults.filter(note => note.title === query.title);
    }
    return filteredResults
}

function findById(id, notesArray){
    const resl = notesArray.filter(note => note.id === id)[0];
    return resl;
}

function createNewNote(body, notesArray){
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(path.join(__dirname, '../../../db/db.json'), 
    JSON.stringify({ notes: notesArray}, null, 2)
    );

    return note;
}


module.exports = {
    filterByQuery,
    findById,
    createNewNote
};