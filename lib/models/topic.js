var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

// Schema
//http://docs.mongodb.org/manual/tutorial/model-tree-structures/
//Did not use this https://npmjs.org/package/mongoose-nested-set
var TopicSchema = new Schema({
    title                   :   String,
    html                    :   String,
    _creator                :   { type: ObjectId, ref: 'User' },
    _subTopics              :   [{ type: ObjectId, ref: 'Topic' }],
    _questions              :   [{ type: ObjectId, ref: 'Question' }]
});




mongoose.model('Topic', TopicSchema);
