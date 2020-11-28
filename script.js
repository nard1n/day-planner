var currentDay = document.querySelector("#current-day");
//var currentTask = document.querySelector(".task");
var containerDisplay = document.querySelector(".container");


let date = moment().format('MMMM Do YYYY');
let hour = moment().format('h'); // to test - currentDay.innerHTML = date + " " + hour;

currentDay.innerHTML = date; // to insert today's date on scheduler

let timeArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];

for (let i = 0; i < 9; i++) {

    // new row
    let hourRow = $('<div>');

    // time column
    let timeCol = $('<div>');

    // task column
    let taskCol = $('<div>');
    let taskForm = $('<form>');

    // save column
    let saveCol = $('<div>');
    let saveButton = $('<button>');

    // save image
    let img = $('<img>');
      img.attr('src', './Assets/save.png');
      $('button').append(img);
    
    //console.log(timeArray[i]); //to test for loop logs

    // variable for row colors
    var backgroundColor;

    // logic for determining background color
    function determineRowColor(time) {
        if (time < hour) {
            return backgroundColor = "past";
        } else if (time == hour) {
                return backgroundColor = "present";
            } else {
                    return backgroundColor = "future";
        }
    }

    // creating new row
    determineRowColor(timeArray[i]);
    hourRow.attr("class", "row");
    $('div').append(hourRow);
}

//saveBtn on("click", funtion(){...})


