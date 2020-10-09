var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
Movie = require('./models/Movie');
const port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());
app.use(cors());


app.use(express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//apis for movie
app.get('/api/movies', async function (req,res) {
    await Movie.getMovies((movies) => {
        res.send(movies.movieList);

    })
});


app.listen(port);
console.log('running on port 3000....');



