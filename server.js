// Code is based on information from documentation and a youtube API video tutorial:
// https://googleapis.dev/nodejs/googleapis/latest/
// https://developers.google.com/drive/api/quickstart/nodejs
// https://developers.google.com/youtube/v3/docs/search
// https://www.youtube.com/watch?v=3VHCxuxtuL8
//
// When you make a request to the API it sends a structured URL like this:
// https://www.googleapis.com/youtube/v3/search?key=apiKey&type=video&part=snippet&q=foo
//
// Everytime we call the Youtube API we use this base URL "https://www.googleapis.com/youtube/v3"
// v3 - is the version of the API we are using
// search - is the functinoality we are requesting
// apiKey - the variable that we assigned to store the API Key generated from https://console.cloud.google.com
// type=video - tells the api what piece of information you are requesting
// part=snippet - snippet contains all the meta information you are requesting such as title, URL, etc.
// q - the search query you are requesting

// npm init
// npm install googleapis
// npm install express

const express = require("express");
// Library for working with YouTube APi's, syntatic sugar for working with URLS
// requires destructuring for google, which is the brackets {}
const {google} = require('googleapis');
const app = express();
const port = 3000;
// I"ve provided an API Key here but you will need to use your own Key. 
const apiKey = "(USE GOOGLE API KEY HERE)";
const youtube = google.youtube({
    version: 'v3',
    auth: apiKey, 
})
const path = require('path');


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

// Here I am making a new route for search results 
app.get("/search", async (req, res, next) => {
    try {
        const searchQuery = req.query.search_query;
        console.log('Server received query:', searchQuery); // Log the received search query on the server

        const response = await youtube.search.list({
            part: "snippet", 
            q: searchQuery,
            type: "video",
        });
        
        const videos = response.data.items.map((item) => ({
            title: item.snippet.title,
            videoId: item.id.videoId
        }));

        console.log('Server sending response:', videos); // Log the response being sent from the server
        res.json(videos);
    } catch (err) {                                      // Error handling
        next(err);
    }
});

app.listen(port, ()=>{
    console.log("Microservice started on port: 3000")
});