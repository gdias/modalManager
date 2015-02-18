var should = require('should'),
	addHash = require('../src/modules/addHashForID.js');

describe('addHash', function() {

	it('Return string with Hash', function() {
		addHash("test").should.equal("#test");
	});

	it('Return same String : No change', function() {
		addHash("#test").should.equal("#test");
	});

}); 