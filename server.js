var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var app = express();
mongoose.Promise = global.Promise

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/QA_DB');

var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    question: {type: String, required: true, minlength: 3},
    desc: String
}, {timestamps: true})

var Question = mongoose.model("Question", QuestionSchema);

app.use(express.static(path.join(__dirname, "./client/dist")));

// get all
app.get('/questions', function(req, res){
    Question.find({}, function(err, data){
        if(err){
            console.log(err);
            res.json({message: "Error", data: data})
        }else{
            console.log(data);
            res.json({message: "Success", data: data})
        }
    })
})

// new
app.post('/question', function(req, res){
    var new_question = new Question(req.body);
    new_question.save(function(err, data){
        if(err){
            console.log(err);
            res.json({message: "Error", data: data})
        }else{
            console.log(data);
            res.json({message: "Success", data: data})
        }
    })
})

// get by id

// delete

// edit


app.all("*", (req, res, next) => { res.sendFile(path.resolve("./client/dist/index.html"))});



app.listen(8000, function(){
    console.log("you are browsin' on port 8000");
})