const express = require('express');  // installing express(third party module) for this app
const app = express(); // instance of an app
const { games } = require('./olympics')
const fs = require('fs');


// Accessing Third Party Module
app.get('/curling', (req, res) => {
    return res.json({ message: 'Curling is the absolute best!' });
});

app.get('/popularity', (req,res) => {
    return res.json({message: "Curlings popularity has skyrocked in recent years"})
})


// Local Module
app.get('/games/:country/:medal', (req, res) => {
    let country = req.params.country
    let medal = req.params.medal
    let answer = games(country, medal);
    return res.json({
        answer: answer
    });
});

app.get('/standings/:country/:town', (req, res) => {
    let country = req.params.country
    let town = req.params.town
    let answer = games(country, town);
    return res.json({
        answer: answer
    });
});

app.get('/canada/:percent/:teams', (req, res) => {
    let percent = req.params.percent
    let teams = req.params.teams
    let answer = canada(percent, teams);
    return res.json({
        answer: answer
    });
});


//-----------------------------------------------------
// test using the core module (fs)
// fs.readFile('curling.txt', 'utf8', (error, data) => {
//     if (error) {
//         console.log('----- error ----', error);
//     } else {
//         console.log(data);
//     }
// })
//-------------------------------------------------------
// using core modules and req.query
//localhost:800/read?something=curling
app.get('/read', (req, res) => {
    // grab the query string,
    // pass the querystring into the fs function
    // return the data that comes from the txt file
    let element = req.query.something; // story
    fs.readFile(`${element}.txt`, 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: 'There is an issue, try again later...'});
        } else {
            console.log(data)
            return res.json({ message: data });
        }
    });
});


// Set up a PORT number, and listen for server
const PORT = process.env.PORT || 8000;
// Listen for the server: this hold 2 parameters
// 1. the PORT
// 2. The function that will execute when this port is running
app.listen(PORT, () => {
    console.log('Server is running on PORT', PORT);
});