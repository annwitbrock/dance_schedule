"use strict";
var app = {};

function init(){
    app.days = [
        new Day("Monday"),
        new Day("Tuesday"),
        new Day("Wednesday"),
        new Day("Thursday"),
        new Day("Friday"),
        new Day("Saturday"),
        new Day("Sunday")
    ];

    app.studios = [
    	new Studio("FakeStudio")];

    app.danceclasses = [];

    app.dancers = []
}
init();
console.info(app.days);

