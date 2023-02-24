const expext = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');
describe("calculateNumber", function () {
	it('Testing the addition of Whole numbers', function () {
		expext(calculateNumber("SUM", 1, 2)).to.equal(3);
	});
	it("Testing the addition of floats for rounding", function ()  {
		expext(calculateNumber('SUM', 1.5, 1.5)).to.equal(4);
	});
	it("Testing the subtraction of whole numbers", function ()  {
		expext(calculateNumber("SUBTRACT", 2, 3)).to.equal(-1);
	});
	it("Testing the subtraction of floats for rounding", function ()  {
		expext(calculateNumber("SUBTRACT", 4.5, 2.3)).to.equal(3);
	});
	it('Testing the divition of whole number', function ()  {
		expext(calculateNumber("DIVIDE", 12, 2)).to.equal(6);
	});
	it("Testing the division of floats for rounding", function ()  {
		expext(calculateNumber("DIVIDE", 16.2, 8.4)).to.equal(2);
	});
	it("Testing the division of floats for rounding in error analysis", function () {
		expext(calculateNumber("DIVIDE", 16.2, 0.0)).to.equal("Error");
	});
});