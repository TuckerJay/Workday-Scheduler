// Jumbotron timeblock
var currentDay = document.querySelector("#currentDay");
var time = moment().format('dddd MMMM Do');
currentDay.textContent = time;


var schedule = [];


var loadStorage = function() {

    schedule = JSON.parse(localStorage.getItem("schedule"));

    // check for empty storage array
    if (!schedule) {
        schedule = ["","","","","","","","",""];
    }

    for ( var i = 0; i < schedule.length; i++) {

        // find proper time div
        var timeDivEl = document.getElementById(i + "d");

        // create textarea element with storage content
        var textAreaEl = document.createElement("textarea");
        $(textAreaEl).addClass("col-8 description").text(schedule[i]);

        // check div's time placement
        checkTime(textAreaEl,i);

        // create button element
        var divBtn = document.createElement("btn");
        $(divBtn).addClass("saveBtn").attr("id",i);

        //create span element
        var btnSpan = document.createElement("span");
        $(btnSpan).addClass("oi oi-lock-locked");

        // append pieces together
        divBtn.append(btnSpan);

        timeDivEl.append(textAreaEl);
        timeDivEl.append(divBtn);

    }

};


var checkTime = function(textAreaEl,i) {

    // Get reference time for every div
    var blockTime = moment().set("hour", (i+9)).set("minute", 0).set("second", 0);

    // Add time classes
    if (moment().isSame(blockTime, "hour")) {
        $(textAreaEl).addClass("present");
    }
    else if (moment().isAfter(blockTime)) {
        $(textAreaEl).addClass("past");
    }
    else {
        $(textAreaEl).addClass("future");
    }

};


var saveChange = function() {

    localStorage.setItem("schedule", JSON.stringify(schedule));

};


// save button listener
$(document).on("click", ".saveBtn", function() {

    // Get button div ID and set text val
    var timeSlot = $(this).attr("id");
    var text = $(this).siblings(".description").val();
    schedule[timeSlot] = text;

    saveChange();

});


loadStorage();