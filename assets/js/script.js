// Jumbotron timeblock
var currentDay = document.querySelector("#currentDay");
var time = moment().format('dddd MMMM Do');
currentDay.textContent = time;

var schedule = [];

var loadStorage = function() {
    schedule = JSON.parse(localStorage.getItem("schedule"));

    if (!schedule) {
        schdule = ["","","","","","","","",""];
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

}

var checkTime = function(textAreaEl,i) {

    var currentTime = moment();
    console.log(currentTime);

}

var saveChange = function() {
    localStorage.setItem("schedule", JSON.stringify(schedule));

}


$(document).on("click", ".saveBtn", function() {
    var timeSlot = $(this).attr("id");
    console.log(timeSlot);

    var text = $(this).siblings(".description").val();
    console.log(text);

    schedule[timeSlot] = text;
    console.log(schedule)

    saveChange();
})

loadStorage();
console.log(schedule)