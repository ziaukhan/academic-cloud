/*
For Node.js/Server Tests we are using:
https://github.com/mhevery/jasmine-node
http://blog.codeship.io/2013/08/20/testing-tuesday-19-how-to-test-node-js-applications-with-jasmine.html
 */
// http://stackoverflow.com/questions/19417334/testing-a-mongoose-js-model-with-node-jasmine-does-not-actually-save-to-the-data
// Connect to database
var db = require('../lib/db/mongo');
var mongoose = db.mongoose;



describe("A suite", function() {
    it("contains async spec with an expectation", function() {
        setTimeout(function(){
            expect(true).toBe(true);
            asyncSpecDone();
        }, 200);
        asyncSpecWait();

    });
});
