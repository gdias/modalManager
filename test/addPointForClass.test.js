var should = require('should'),
	addPoint = require('../src/modules/addPointForClass.js');

	describe('addPoint', function() {

		it('Return string with point', function() {
			addPoint("test").should.equal(".test");
		});

		it('Return same String : No change', function() {
			addPoint(".test").should.equal(".test");
		});

	});