var mongoose = require('mongoose'),
    extend = require('mongoose-schema-extend');
var Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;
var question = require('./question');

// Schema
var SelectedQuestionSchema = new Schema({
    _originalQuestion       : { type: ObjectId, ref: 'Question' },
    quizQuestion            : question.QuestionSchema
});


var SelectedTopicSchema = new Schema({
    title                   :   String,
    desc                    :   String,
    _originalTopic          : { type: ObjectId, ref: 'Topic' },
    subTopics               : [SelectedTopicSchema],
    selectedQuestions       : [SelectedQuestionSchema]
});



var QuizSchema = new Schema({
    title                   :   String,
    desc                    :   String,
    proctoringKey           :   String,
    duration                :   Number,
    _creator                :   { type: ObjectId, ref: 'User' },
    _group                :   { type: ObjectId, ref: 'Group' },
    selectedTopics          :   [SelectedTopicSchema],
    created                 :   { type : Date, default : Date.now }
});




mongoose.model('Quiz', QuizSchema);
