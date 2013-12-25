var mongoose = require('mongoose'),
    extend = require('mongoose-schema-extend');
var Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

// Schema
//https://github.com/briankircho/mongoose-schema-extend
var QuestionSchema = new Schema({
    title           : String,
    html            : String
}, { collection : 'questions', discriminatorKey : '_type' });

var OptionSchema = new Schema({
    id              : Number,
    html            : String,
    correctAnswer   : Boolean
});


var MCQSchema = QuestionSchema.extend({
    options : [OptionSchema]
});

var TrueFalseQuestionSchema = QuestionSchema.extend({
    correctAnswer : Boolean
});

var QuestionSetSchema = QuestionSchema.extend({
    questions : [QuestionSchema]
})

exports.QuestionSchema = QuestionSchema;

mongoose.model('Question', QuestionSchema);
mongoose.model('MCQ', MCQSchema),
mongoose.model('TrueFalseQuestion', TrueFalseQuestionSchema);
mongoose.model('QuestionSet', QuestionSetSchema);