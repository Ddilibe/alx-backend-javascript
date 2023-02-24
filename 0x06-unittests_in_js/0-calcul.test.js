const assert = require('assert');
const calculateNumber = require('./0-calcul');
describe('calculateNumber', function ()  {
	it("", function ()  {
		assert.equal(calculateNumber(2,2), 4);
	});
	it("", function () {
		assert.notEqual(calculateNumber(2,2), 5);
	});
	it("", function ()  {
		assert.equal(typeof(calculateNumber(2,2)), "number");
	});
	it("", function () {
		assert.notEqual(typeof(calculateNumber(2,2)), "string");
	});
	it("", function () {
		assert.equal(calculateNumber(2, 2.8), 5)
	});
});