'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;


var UserSchema = new Schema({
    name                    :   String,
    firstname               :   String,
    lastname                :   String,
    facebookid              :   { type : String , required : true , index:true },   //Use as Login ID
    email                   :   String,
    created                 :   { type : Date, default : Date.now },
    _questionBank           :   [{ type: ObjectId, ref: 'Topic' }],
    _memberships            :   [{ type: ObjectId, ref: 'Group' }]

});





mongoose.model('User', UserSchema);

