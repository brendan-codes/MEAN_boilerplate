var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {
    index: function(req, res){
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
    },

    new: function(req, res){
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
    }
}