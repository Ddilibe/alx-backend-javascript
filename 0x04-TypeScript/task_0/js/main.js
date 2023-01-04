"use strict";
exports.__esModule = true;
var first = {
    firstName: "Micheal",
    lastName: "Eze",
    age: 12,
    location: "Anambra"
};
var second = {
    firstName: "Ebuka",
    lastName: "Nwosu",
    age: 21,
    location: "Ebonyi"
};
var newArray = [first, second];
function generateTable(newArrays) {
    var table = document.querySelector("table");
    var thead = table.createTHead();
    var row1 = thead.insertRow();
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var texta = document.createTextNode("First Name");
    var textb = document.createTextNode("Location");
    th1.appendChild(texta);
    th2.appendChild(textb);
    row1.appendChild(th1);
    row1.appendChild(th2);
    for (var _i = 0, newArrays_1 = newArrays; _i < newArrays_1.length; _i++) {
        var element = newArrays_1[_i];
        var row = table.insertRow();
        var cell = row.insertCell();
        var firstName = document.createTextNode(element.firstName);
        cell.appendChild(firstName);
        var cell2 = row.insertCell();
        var location_1 = document.createTextNode(element.location);
        cell2.appendChild(location_1);
    }
}
exports["default"] = generateTable;
generateTable(newArray);
