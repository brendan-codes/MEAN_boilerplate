// require server modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

// create express instance
var app = express();

// update deprecated mongoose Promise to the global promise
mongoose.Promise = global.Promise

// set up bodyParser to send/read JSON
app.use(bodyParser.json());

// connect to our DB, define the name
mongoose.connect('mongodb://localhost/QA_DB');

// static content
app.use(express.static(path.join(__dirname, "./client/dist")));

// set up question schema
var Schema = mongoose.Schema;
var QuestionSchema = new Schema({
    question: {
        type: String, 
        required: true, 
        minlength: [3, "You must say a real question not just letters!"] // custom error messages are just arrays
    },
    desc: String
}, {timestamps: true})

// create the actual model
var Question = mongoose.model("Question", QuestionSchema);

// get all
app.get('/questions', function(req, res){
    Question.find({}, function(err, data){
        // always check and handle errors appropriately
        if(err){
            console.log(err);
            res.json({message: "Error", data: err})
        }else{
            console.log(data);
            res.json({message: "Success", data: data})
        }
    })
})

// new
app.post('/question', function(req, res){
    var new_question = new Question(req.body);
    console.log(new_question); // it's good to check out objects before you save them to see if there are issues
    new_question.save(function(err, data){
        if(err){
            console.log(err);
            res.json({message: "Error", data: err})
        }else{
            console.log(data);
            res.json({message: "Success", data: data})
        }
    })
})

// this is the catch all route. if you get ANY route other than the above route, send the index
app.all("*", (req, res, next) => { res.sendFile(path.resolve("./client/dist/index.html"))});

// listen on this port
app.listen(8000, function(){
    console.log("you are browsin' on port 8000");
})