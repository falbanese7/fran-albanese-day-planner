// Variables to control the date that appears at the top of the page
const headerEl = $('#header');
const dateEl = $('<h2>');
const day = moment().format('MMMM Do YYYY');
dateEl.text(day);
headerEl.append(dateEl)

// Variable to get the current hour
let hour = moment().hour();

// Variables to save user inputs for each hour
let saveEl = $('.saveBtn');
let hourNine = $('#9');
let hourTen = $('#10');
let hourElev = $('#11');
let hourTwel = $('#12');
let hourOne = $('#13');
let hourTwo = $('#14');
let hourThree = $('#15');
let hourFour = $('#16');
let hourFive = $('#17');

// Declare variables for user input saving
let calEvent;
let textSave;

// Function that controls the background color of each text area
function whatTime() {
    $('.text-field').each(function() {
        let timeCheck = parseInt($(this).attr('id'));
        hour = parseInt(hour);
        console.log(timeCheck)
        console.log(hour)
        if (hour > timeCheck) {
            $(this).addClass('past')
        } else if (hour < timeCheck) {
            $(this).addClass('future')
        } else (
            $(this).addClass('present')
        )
    })
}

// Function that takes local storage key value and keep it on the page even after refreshing
function setEvent() {
    let setEvent9 = JSON.parse(localStorage.getItem("9 am"))
    hourNine.val(setEvent9);
    
    let setEvent10 = JSON.parse(localStorage.getItem("10 am"))
    hourTen.val(setEvent10);

    let setEvent11 = JSON.parse(localStorage.getItem("11 am"))
    hourElev.val(setEvent11);

    let setEvent12 = JSON.parse(localStorage.getItem("12 pm"))
    hourTwel.val(setEvent12);

    let setEvent1 = JSON.parse(localStorage.getItem("1 pm"))
    hourOne.val(setEvent1);

    let setEvent2 = JSON.parse(localStorage.getItem("2 pm"))
    hourTwo.val(setEvent2);

    let setEvent3 = JSON.parse(localStorage.getItem("3 pm"))
    hourThree.val(setEvent3);

    let setEvent4 = JSON.parse(localStorage.getItem("4 pm"))
    hourFour.val(setEvent4);

    let setEvent5 = JSON.parse(localStorage.getItem("5 pm"))
    hourFive.val(setEvent5);
}

// Once the page is ready we can call our functions and give the save buttons their functionality.
$(function(){
    whatTime();
    setEvent();
    // When the save button is clicked, the user's input will be saved to local storage
    $('.saveBtn').on('click', function(){
        calEvent = $(this).siblings('.text-field').val().trim();
        console.log(calEvent);
        textSave = $(this).siblings('.hour').text().trim();
        console.log(textSave);
        localStorage.setItem(textSave, JSON.stringify(calEvent));

    })
    // Adding a clear button so if the user wants to change their schedule for the next day it will 
    // be easier than clicking into each text area and removing the entry manually.
    $('.clear-button').on('click', function(){
        localStorage.clear();
        setEvent();
    })
}) 



