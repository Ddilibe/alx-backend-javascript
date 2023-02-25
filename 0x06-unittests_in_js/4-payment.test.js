const sendPaymentRequestToApi = require("./4-payment");
const Utils = require('./utils');
const sinon = require('sinon');
const assert = require('assert');

describe("sendPaymentRequestToApi", function () {
    it("testing sendPaymentRequestToApi using spy", function () {
        const spy = sinon.spy(Utils, "calculateNumber");
        sendPaymentRequestToApi(100, 10);
        spy.withArgs("SUM", 100, 10).return("The total is: 10");
        assert(Utils.sendPaymentRequestToApi("SUM", 100, 10)).to.be.equal)
        spy.restore();
    });
});
