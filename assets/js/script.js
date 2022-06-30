var timeStamp = document.querySelector("#currentDay");

var time = moment().format('dddd MMMM Do');

timeStamp.textContent = time;