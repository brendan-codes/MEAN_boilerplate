var mongoose = require('mongoose');
// set up question schema
var Schema = mongoose.Schema;


var QuestionSchema = new Schema({
    question: {
        type: String, 
        required: true, 
        minlength: [3, "You must say a real question not just letters!"] // custom error messages are just arrays
    },
    desc: String
}, {timestamps: true});


// create the actual model
mongoose.model("Question", QuestionSchema);