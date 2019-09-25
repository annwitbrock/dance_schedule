"use strict";
const Studio = require('./studio');
const Day = require('./day');
const DanceClass = require('./danceclass');
const Dancer = require('./dancer');

var studioApp = {};

function init() {
    studioApp.days = [
        new Day.Day("Monday"),
        new Day.Day("Tuesday"),
        new Day.Day("Wednesday"),
        new Day.Day("Thursday"),
        new Day.Day("Friday"),
        new Day.Day("Saturday"),
        new Day.Day("Sunday")
    ];

    studioApp.studios = [
        new Studio.Studio(
            "Fake Studio",
            "10 Fake Street",
            "London",
            "£1.00"
        )
    ];

    studioApp.danceclasses = [
        new DanceClass.DanceClass(
            "Fake Class",
            "Ballet",
            "Pro",
            "£8.00",
            "Tuesday",
            "15:00",
            "Fake Studio"
        )
    ];

    studioApp.dancers = [
        new Dancer.Dancer(
            "Ann",
            "Pro",
            "Tuesday",
            "London"
        )
    ]
}
init();

console.info(studioApp);