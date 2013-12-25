var mongoose = require('mongoose'),
    extend = require('mongoose-schema-extend');
var Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

// Schema
//https://github.com/briankircho/mongoose-schema-extend
var AnswerSchema = new Schema({
    _answerSheet          :   { type: ObjectId, ref: 'AnswerSheet' },
    questionID            :   { type: ObjectId, ref: 'Question' },
    created               :   { type : Date, default : Date.now }
}, { collection : 'answers', discriminatorKey : '_type' });

var OptionAnswerSchema = new Schema({
    id               : Number,
    selectedAnswer   : Boolean
});


var MCQAnswerSchema = AnswerSchema.extend({
    options : [OptionAnswerSchema],
    correct : Boolean
});

var TrueFalseAnswerSchema = AnswerSchema.extend({
    selectedAnswer : Boolean,
    correct        : Boolean
});

var AnswerSetSchema = AnswerSchema.extend({
    answers : [AnswerSchema]
})


var AnswerSheetSchema = new Schema({
    _quizCandidate        :   { type: ObjectId, ref: 'User' },
    _quiz                 :   { type: ObjectId, ref: 'Quiz' },
    _group                :   { type: ObjectId, ref: 'Group' },
    created               :   { type : Date, default : Date.now },
    //answers               :   { type: ObjectId, ref: 'AnswerSchema' }
});


mongoose.model('AnswerSheet', AnswerSheetSchema);
mongoose.model('Answer', AnswerSchema);
mongoose.model('MCQAnswer', MCQAnswerSchema);
mongoose.model('TrueFalseAnswer', TrueFalseAnswerSchema);
mongoose.model('AnswerSet', AnswerSetSchema);