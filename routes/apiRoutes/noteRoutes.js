const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { filterByQuery, findById, createNewNote } = require('../../public/assets/js/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    if (res.query){
        results = filterByQuery(req.query, results);
    }
    res.json(results);
})

// router.get('/api/notes', (req, res) => {
    
//     res.json(notes);
// })

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result){
        res.json(result);
    } else {
        res.send(404);
    }
})

router.post('/notes', (req, res) => {
    //set id to the note 
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);

    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    notes.splice(req.params.id, 1);
    // fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes), (err) => {
    //     if (err){
    //         return console.log(err)
    //     }
    //     console.log("Your note was deleted");
    // });
    res.json(notes);
    //console.log(notes);
})

module.exports = router;