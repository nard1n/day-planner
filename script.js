var currentDay = $("#current-day");
var containerDisplay = $(".container");

let date = moment().format('MMMM Do YYYY');
let currentTime = moment().format('LT');
let hour = parseInt(moment().format('HH')); // to test - currentDay.innerHTML = date + ", " + hour;

currentDay.text(date + ", " + currentTime); // to insert today's date on scheduler

//loop through the array creating a new row within the container for each biz hour
let timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]; //array for biz hour of day
let entryObject = {}; //local storage objects

for (let i = 0; i < 9; i++) {

    // to create new row
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
    img.attr('class', 'save-icon');
    saveButton.append(img);
    
    //console.log(timeArray[i]); //to test for loop logs

    //if statement to check if anything is present in local storage and creates new entry on load
    if (localStorage.getItem("entry" + timeArray[i])=="") {
        entryObject[timeArray[i]] = localStorage.getItem("entry" + timeArray[i]);
        localStorage.setItem("entry" + timeArray[i], "");
    } else {
       
    }

    //logic to determine time displayed
    function determineAMPM (hour) {
        if (hour == 9 || hour == 10 || hour == 11) {
            return hour + " AM";
        } else {
            return hour + " PM";
        }
    }

    //logic for determining background color
    function determineRowColor(time) {
        if (time<hour) {
            return backgroundColor="past";
        }
        else if (time==hour) {
            return backgroundColor="present";
            
        } else {
            return backgroundColor="future";
        }
    }

    // creating new row
    hourRow.attr("class", "row rows text-center ");
    //$('div').append(hourRow); for initial test


    //creating time columns
    timeCol.attr("class", "col-1 rows time-block hour");
    timeCol.text(timeArray[i]);
    timeCol.text(determineAMPM(timeArray[i]));


    //creating text area
    determineRowColor(timeArray[i]);
    taskCol.attr("class", "col-9 rows " + backgroundColor);
    formTextArea.attr("class", "form-control-plaintext");
    formTextArea.attr("id", "text-area-" + timeArray[i]);
    formTextArea.text(localStorage.getItem("entry" + timeArray[i]));

    //creating save button
    saveCol.attr("class","col-2 rows padding-0");
    saveButton.attr("class", "saveBtn");
    saveButton.attr("data-number", timeArray[i]);

    //appending columns into rows
    hourRow.append(timeCol);

    hourRow.append(taskCol);
    taskCol.append(taskForm);
    taskForm.append(formTextArea);  

    hourRow.append(saveCol);
    saveCol.append(saveButton);

    containerDisplay.append(hourRow);

}

//click handler funciton to save user entries when button is clicked
$(".saveBtn").on("click",function() {
    // storing data-number from button pressed
    let index = $(this).attr("data-number");
     //console.log(index);

    // using index to access text area class
    let selectedTextInput= $("#text-area-"+index).val();
    console.log(selectedTextInput);

    //setting text area to item in local storage at that entry
    localStorage.setItem("entry" + index,selectedTextInput); 
})