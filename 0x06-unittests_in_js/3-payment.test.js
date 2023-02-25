const sendPaymentRequestToApi = require("./3-payment");
const Utils = require('./utils');
const sinon = require('sinon');
const assert = require('assert');

describe("sendPaymentRequestToApi", function () {
    it("testing sendPaymentRequestToApi using spy", function () {
        const spy = sinon.spy(Utils, "calculateNumber");
        sendPaymentRequestToApi(100, 10);
        assert(spy.withArgs("SUM", 100, 10).calledOnce);
        spy.restore();
    });
});
