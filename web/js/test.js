"use strict";
var testApp;

//-------------------------------

if (typeof WSH !== 'undefined'){
    var console = {
        info: function (s){
            WSH.Echo(s);
        },
        log: function (s){
            WSH.Echo(s);
        }
    };
    var document = {
        write : function (s){
            WSH.Echo(s);
        }
    };
    var alert = function (s){
        WSH.Echo(s);
    };
}

//-----------------------------------
console.log("Hello World!");

function testDay(){
    var day = new Day("TestDay");
    console.info(day);
}
testDay();

function testStudio(){
    var studio = new Studio(
        "Test Studio", 
        "10 Test Street", 
        "London", 
        "£1.00"
        );
    console.info(studio);
}
testStudio();

function testDanceClass(){
    var danceclass = new DanceClass(
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

function testDancer(){
    var dancer = new Dancer(
        "Ann", 
        "Pro", 
        "TestDay", 
        "London"
        );
    console.info(dancer);
}
testDancer();