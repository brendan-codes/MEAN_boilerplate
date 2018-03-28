var questions = require('../controllers/questions.js');

module.exports = function(app){
    // get all
    app.get('/questions', function(req, res){
        questions.index(req, res);
    })

    // new
    app.post('/question', function(req, res){
        questions.new(req, res)
    })

    // this is the catch all route. if you get ANY route other than the above route, send the index
    app.all("*", (req, res, next) => { res.sendFile(path.resolve("./client/dist/index.html"))});
}



