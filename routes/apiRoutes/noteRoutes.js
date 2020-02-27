var router = require('express').Router();
var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, "../../db/db.json");

// GET /notes - return the notes.html file



// GET * - Should return the index.html file



// GET /api/notes - db.json file returns all saved notes as JSON



// POST /api/notes - receives a new note, saves, adds it to the db.json file



// DELETE /api/notes/:id - receives a query parameter containing the id of a note to delete