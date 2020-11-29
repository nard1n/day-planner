var currentDay = $("#current-day");
var containerDisplay = $(".container");

let date = moment().format('MMMM Do YYYY');
let hour = moment().format('h'); // to test - currentDay.innerHTML = date + " " + hour;

currentDay.text(date); // to insert today's date on scheduler

let timeArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];

for (let i = 0; i < 9; i++) {

    // new row
    let hourRow = $('<div>');

    // time column
    let timeCol = $('<div>');

    // task/test area column
    let taskCol = $('<div>');
    let taskForm = $('<form>');
    let formTextArea = $('<textarea>');

    // save column
    let saveCol = $('<div>');
    let saveButton = $('<button>');
     // save image
    let img = $('<img>');
    img.attr('src', "./Assets/save.png");
    img.attr('class', 'save-icon')
    saveButton.append(img);
    
    //console.log(timeArray[i]); //to test for loop logs

    // variable for row color
    var backgroundColor;

    //logic to determine time displayed
    function determineAMPM (hour) {
        if (hour == 9 || hour == 10 || hour == 11) {
            return hour + " AM";
        } else {
            return hour + " PM";
        }
    }

    // logic for determining background color
    function determineRowColor() {
        if (i < hour) {
            return backgroundColor = "past";
        } else if (i == hour) {
            return backgroundColor = "present";
        } else {
            return backgroundColor = "future";
        }
    }

    // creating new row
    hourRow.attr("class", "row rows d-flex text-center text-center align-items-center");
    //$('div').append(hourRow); for initial test


    //creating time columns
    timeCol.attr("class", "col-1 rows time-block hour");
    timeCol.text(timeArray[i]);
    timeCol.text(determineAMPM(timeArray[i]));


    //creating text area
    taskCol.attr("class", "col-9 rows form-group " );
    taskForm.attr("class", "form-control-plaintext");

    //creating save button
    saveCol.attr("class","col-2 rows");
    saveButton.attr("class", "saveBtn");

    //append columns into row
    hourRow.append(timeCol);

    hourRow.append(taskCol);
    taskCol.append(taskForm);
    taskForm.append(formTextArea);  

    hourRow.append(saveCol);
    saveCol.append(saveButton);

    //containerDisplay.append(hourRow);
    containerDisplay.append(hourRow);
}

//saveBtn on("click", funtion(){...})


