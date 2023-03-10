const assert = require('assert');
const calculateNumber = require('./1-calcul');
describe("calculateNumber", function () {
	it('Testing the addition of Whole numbers', function () {
		assert.equal(calculateNumber("SUM", 1, 2), 3)
	});
	it("Testing the addition of floats for rounding", function ()  {
		assert.equal(calculateNumber('SUM', 1.5, 1.5), 4)
	});
	it("Testing the subtraction of whole numbers", function ()  {
		assert.equal(calculateNumber("SUBTRACT", 2, 3), -1);
	});
	it("Testing the subtraction of floats for rounding", function ()  {
		assert.equal(calculateNumber("SUBTRACT", 4.5, 2.3), 3);
	});
	it('Testing the divition of whole number', function ()  {
		assert.equal(calculateNumber("DIVIDE", 12, 2), 6);
	});
	it("Testing the division of floats for rounding", function ()  {
		assert.equal(calculateNumber("DIVIDE", 16.2, 8.4), 2);
	});
	it("Testing the division of floats for rounding in error analysis", function () {
		assert.equal(calculateNumber("DIVIDE", 16.2, 0.0), "Error");
	});
});