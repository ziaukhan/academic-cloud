/*
For Node.js/Server Tests we are using:
https://github.com/mhevery/jasmine-node
http://blog.codeship.io/2013/08/20/testing-tuesday-19-how-to-test-node-js-applications-with-jasmine.html
 */


var mongoose = require('mongoose');
var user = require("../lib/models/user");

var User = mongoose.model("User");

xdescribe("A suite, just for testing", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
    it("contains async spec with an expectation", function() {
        setTimeout(function(){
            expect(true).toBe(true);
            asyncSpecDone();
        }, 2000);
        asyncSpecWait();
    });

});

describe('Create a instance of testModel', function() {
    beforeEach(function() {
        mongoose.connect('mongodb://localhost/test1db');
    });


    afterEach(function() {
        mongoose.connection.db.executeDbCommand({
            dropDatabase: 1
        }, function(err, result) {
            console.log(err);
            console.log(result);
            process.exit(0);
        });
    });


    it('should save to the database', function() {
        var userModel = new User();
        userModel.name = 'Zia Ullah Khan';
        userModel.firstname = 'Zia';
        userModel.lastname = 'Khan';
        userModel.facebookid = 'abc123';
        userModel.save(function(err) {
            expect(err).toBeNull();
            User.find(function(err, result) {
                expect(result.length).toBe(1);
                expect(result[0].firstname).toBe('Zia');
                expect(result[0].facebookid).toEqual('abc123');
                asyncSpecDone();
            });
        });
        asyncSpecWait();
    });
});

