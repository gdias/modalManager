
var toggleHash = require('../src/modules/toggleHashForId');
var should = require('should');


describe('manipulateHashID', function() {
	
	it('in:lessHash | out:withHash', function() {
		toggleHash("toto",true).should.equal("#toto");
	});
	it('in:lessHash | out:lessHash', function() {
		toggleHash("toto",false).should.equal("toto");
	});
	it('in:withHash | out:withHash', function() {
		toggleHash("#toto",true).should.equal("#toto");
	});
	it('in:withHash | out:lessHash', function() {
		toggleHash("#toto",false).should.equal("toto");
	});
	
});