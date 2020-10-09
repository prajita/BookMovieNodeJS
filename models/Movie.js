var movieList = require('../constants/MovieList');

module.exports.getMovies = function (callback) {
    try {
        callback(movieList);
    } catch (e) {
        console.log(e)
    }

}