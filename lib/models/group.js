'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;


var GroupSchema = new Schema({
    name                    :   String,
    html                    :   String,
    _creator                :   { type: ObjectId, ref: 'User' },
    created                 :   { type : Date, default : Date.now },
    _members                :   [{ type: ObjectId, ref: 'User' }],
    _quizes                :   [{ type: ObjectId, ref: 'Quiz' }]

});





mongoose.model('Group', GroupSchema);
