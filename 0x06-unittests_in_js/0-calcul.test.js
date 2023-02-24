const assert = require('assert');
const calculateNumber = require('./0-calcul');
describe('calculateNumber', () => {
	it("", () => {
		assert.equal(calculateNumber(2,2), 4);
	});
	it("", () => {
		assert.notEqual(calculateNumber(2,2), 5);
	});
	it("", () => {
		assert.equal(typeof(calculateNumber(2,2)), "number");
	});
	it("", () => {
		assert.notEqual(typeof(calculateNumber(2,2)), "string");
	});
	it("", () => {
		assert.equal(calculateNumber(2, 2.8), 5)
	});
});