function sentPaymentRequestToApi(totalAmount, totalShipping) {
    const Utils = require("./utils");
    const ans = Utils.calculateNumber("SUM", totalAmount, totalShipping);
    process.stdout.write(`The total is ${ans}\n`);
}

module.exports = sentPaymentRequestToApi
