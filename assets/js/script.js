// Jumbotron timeblock
var currentDay = document.querySelector("#currentDay");
var time = moment().format('dddd MMMM Do');
currentDay.textContent = time;

var schedule = [];

var loadStorage = function() {
    schedule = JSON.parse(localStorage.getItem("schedule"));
    for (var i = 0; i <schedule.length; i++) {
        var btn = document.getElementById(i);

        var textEl = $(btn).siblings(".description");
        console.log(textEl);

        var text = schedule[i];
        console.log(text);

        textEl.textContent = text;

        //try dynamically creating time slot div and textarea and prepend to row div

    }
}

var saveChange = function() {
    localStorage.setItem("schedule", JSON.stringify(schedule));

}


$(".saveBtn").on("click", function() {
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