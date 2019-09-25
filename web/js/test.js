"use strict";
const Studio = require('./studio');
const Day = require('./day');
const DanceClass = require('./danceclass');
const Dancer = require('./dancer');

//-------------------------------

//console.log("Hello World!");

function testDay() {
    var day = new Day.Day("TestDay");
    console.info(day);
}
testDay();

function testStudio() {
    var studio = new Studio.Studio(
        "Test Studio",
        "10 Test Street",
        "London",
        "£1.00"
    );
    console.info(studio);
}
testStudio();

function testDanceClass() {
    var danceclass = new DanceClass.DanceClass(
        "Test Class",
        "Ballet",
        "Pro",
        "£8.00",
        "TestDay",
        "15:00",
        "Test Studio"
    );
    console.info(danceclass);
}
testDanceClass();

function testDancer() {
    var dancer = new Dancer.Dancer(
        "Ann",
        "Pro",
        "TestDay",
        "London"
    );
    console.info(dancer);
}
testDancer();