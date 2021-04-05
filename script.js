/*
Pseudo Code 
The user will be shown an agenda with the current Day and Time 
    1. Preferably in the Format 
        Day of the Week, Month, Day , Hour , Minute. 
The agenda will have the times 6am - 9pm 
The User will have the option to type in agenda text box. 
When the user wants to save their agenda item they will click the add to calendar button.
The button will save the users text and will display in the text box.
    1. This will be stored in local storage 
The calendar calendar will show the following 
    1. A light gray color for time that has passed 
    2. A pink color for the current hour 
    3. A blue color for upcoming times. */

const displayDate = document.querySelector ("#currentDay"); 
let agendaItems= document.querySelector (".form-control"); 
let textBox = document.querySelector(".col"); 

 

// The current time and day 
currentTime =  moment().format('h A z');
let currentDay= moment().format('dddd [-] MMM. D, YYYY [at] h:mm A z') 
displayDate.innerHTML=currentDay; 
console.log (currentTime); 


// this is where we are creating local storage using the button 
$('.btn').on('click', function(){
    var time = $(this).parent().parent().attr("id"); 
   var value = $(this).siblings('.form-control').val();
   localStorage.setItem(time, value);


});

// this is where we are getting the local storage and saving it into the form 
function init(){
    $('#hour-6 .form-control').val(localStorage.getItem('hour-6'));
    $('#hour-7 .form-control').val(localStorage.getItem('hour-7'));
    $('#hour-8 .form-control').val(localStorage.getItem('hour-8'));
    $('#hour-9 .form-control').val(localStorage.getItem('hour-9'));
    $('#hour-10 .form-control').val(localStorage.getItem('hour-10'));
    $('#hour-11 .form-control').val(localStorage.getItem('hour-11'));
    $('#hour-12 .form-control').val(localStorage.getItem('hour-12'));
    $('#hour-06 .form-control').val(localStorage.getItem('hour-06'));
    $('#hour-07 .form-control').val(localStorage.getItem('hour-07'));
    $('#hour-08 .form-control').val(localStorage.getItem('hour-08'));
    $('#hour-09 .form-control').val(localStorage.getItem('hour-09'));
}

init();

// this is where we are defining times for comparison
let time6 = "6 AM "; 
let time7 = "7 AM "; 
let time8 = "8 AM "; 
let time9 = "9 AM "; 
let time10 = "10 AM "; 
let time11 = "11 AM "; 
let time12 = "12 PM "; 
let time1 = "1 PM "; 
let time2 = "2 PM "; 
let time3 = "3 PM "; 
let time4 = "4 PM "; 
let time5 = "5 PM ";
let time06 = "6 PM "; 
let time07 = "7 PM ";  
let time08 = "8 PM "; 
let time09 = "9 PM "; 

// testing
console.log(currentTime > time09); 
console.log(currentTime === time09); 
console.log(currentTime < time09); 

// This is where we are creating conditions for the colors on the agenda 

// color changer rules for 6am 
if ( currentTime > time6){
    document.querySelector('#hour-6 .input-group-text').style.backgroundColor="#D3D3D3"; 
    document.querySelector('#hour-6 .form-control').style.backgroundColor="#D3D3D3"; 

} else if (currentTime === time6) {
    document.querySelector('#hour-6 .input-group-text').style.backgroundColor="#FFB6C1"; 
    document.querySelector('#hour-6 .form-control').style.backgroundColor="#FFB6C1"

} else if (currentTime < time6) {
    document.querySelector('#hour-6 .input-group-text').style.backgroundColor="#5bb1cd"; 
    document.querySelector('#hour-6 .form-control').style.backgroundColor="#5bb1cd"; 
}; 

// color changer rules for 7am 
if ( currentTime > time7){
    document.querySelector('#hour-7 .input-group-text').style.backgroundColor="#D3D3D3"; 
    document.querySelector('#hour-7 .form-control').style.backgroundColor="#D3D3D3"; 

} else if (currentTime === time7) {
    document.querySelector('#hour-7 .input-group-text').style.backgroundColor="#FFB6C1"; 
    document.querySelector('#hour-7 .form-control').style.backgroundColor="#FFB6C1"

} else if (currentTime < time7) {
    document.querySelector('#hour-7 .input-group-text').style.backgroundColor="#5bb1cd"; 
    document.querySelector('#hour-7 .form-control').style.backgroundColor="#5bb1cd"; 
}; 

// color changer rules for 8am 
if ( currentTime > time8){
    document.querySelector('#hour-8 .input-group-text').style.backgroundColor="#D3D3D3"; 
    document.querySelector('#hour-8 .form-control').style.backgroundColor="#D3D3D3"; 

} else if (currentTime === time8) {
    document.querySelector('#hour-8 .input-group-text').style.backgroundColor="#FFB6C1"; 
    document.querySelector('#hour-8 .form-control').style.backgroundColor="#FFB6C1"

} else if (currentTime < time8) {
    document.querySelector('#hour-8 .input-group-text').style.backgroundColor="#5bb1cd"; 
    document.querySelector('#hour-8 .form-control').style.backgroundColor="#5bb1cd"; 
}; 

// color changer rules for 9am 
if ( currentTime > time9){
    document.querySelector('#hour-9 .input-group-text').style.backgroundColor="#D3D3D3"; 
    document.querySelector('#hour-9 .form-control').style.backgroundColor="#D3D3D3"; 

} else if (currentTime === time9) {
    document.querySelector('#hour-9 .input-group-text').style.backgroundColor="#FFB6C1"; 
    document.querySelector('#hour-9 .form-control').style.backgroundColor="#FFB6C1"

} else if (currentTime < time9) {
    document.querySelector('#hour-9 .input-group-text').style.backgroundColor="#5bb1cd"; 
    document.querySelector('#hour-9 .form-control').style.backgroundColor="#5bb1cd"; 
}; 

// color changer rules for 10am 
if ( currentTime > time10){
    document.querySelector('#hour-10 .input-group-text').style.backgroundColor="#D3D3D3"; 
    document.querySelector('#hour-10 .form-control').style.backgroundColor="#D3D3D3"; 

} else if (currentTime === time10) {
    document.querySelector('#hour-10 .input-group-text').style.backgroundColor="#FFB6C1"; 
    document.querySelector('#hour-10 .form-control').style.backgroundColor="#FFB6C1"

} else if (currentTime < time10) {
    document.querySelector('#hour-10 .input-group-text').style.backgroundColor="#5bb1cd"; 
    document.querySelector('#hour-10 .form-control').style.backgroundColor="#5bb1cd"; 
}; 

// color changer rules for 11am 
if ( currentTime > time11){
    document.querySelector('#hour-11 .input-group-text').style.backgroundColor="#D3D3D3"; 
    document.querySelector('#hour-11 .form-control').style.backgroundColor="#D3D3D3"; 

} else if (currentTime === time11) {
    document.querySelector('#hour-11 .input-group-text').style.backgroundColor="#FFB6C1"; 
    document.querySelector('#hour-11 .form-control').style.backgroundColor="#FFB6C1"

} else if (currentTime < time11) {
    document.querySelector('#hour-11 .input-group-text').style.backgroundColor="#5bb1cd"; 
    document.querySelector('#hour-11 .form-control').style.backgroundColor="#5bb1cd"; 
};

// color changer rules for 12pm 
if ( currentTime > time12){
    document.querySelector('#hour-12 .input-group-text').style.backgroundColor="#D3D3D3"; 
    document.querySelector('#hour-12 .form-control').style.backgroundColor="#D3D3D3"; 

} else if (currentTime === time12) {
    document.querySelector('#hour-12 .input-group-text').style.backgroundColor="#FFB6C1"; 
    document.querySelector('#hour-12 .form-control').style.backgroundColor="#FFB6C1"

} else if (currentTime < time12) {
    document.querySelector('#hour-12 .input-group-text').style.backgroundColor="#5bb1cd"; 
    document.querySelector('#hour-12 .form-control').style.backgroundColor="#5bb1cd"; 
};

// color changer rules for 1pm 
if ( currentTime > time1){
    document.querySelector('#hour-1 .input-group-text').style.backgroundColor="#D3D3D3"; 
    document.querySelector('#hour-1 .form-control').style.backgroundColor="#D3D3D3"; 

} else if (currentTime === time1) {
    document.querySelector('#hour-1 .input-group-text').style.backgroundColor="#FFB6C1"; 
    document.querySelector('#hour-1 .form-control').style.backgroundColor="#FFB6C1"

} else if (currentTime < time1 ) {
    document.querySelector('#hour-1 .input-group-text').style.backgroundColor="#5bb1cd"; 
    document.querySelector('#hour-1 .form-control').style.backgroundColor="#5bb1cd"; 
}; 

// color changer rules for 2pm 
if ( currentTime > time2){
    document.querySelector('#hour-2 .input-group-text').style.backgroundColor="#D3D3D3"; 
    document.querySelector('#hour-2 .form-control').style.backgroundColor="#D3D3D3"; 

} else if (currentTime === time2) {
    document.querySelector('#hour-2 .input-group-text').style.backgroundColor="#FFB6C1"; 
    document.querySelector('#hour-2 .form-control').style.backgroundColor="#FFB6C1"

} else if (currentTime < time2 ) {
    document.querySelector('#hour-2 .input-group-text').style.backgroundColor="#5bb1cd"; 
    document.querySelector('#hour-2 .form-control').style.backgroundColor="#5bb1cd"; 
};

// color changer rules for 3pm 
if ( currentTime > time3) {
    document.querySelector('#hour-3 .input-group-text').style.backgroundColor="#D3D3D3"; 
    document.querySelector('#hour-3 .form-control').style.backgroundColor="#D3D3D3"; 

} else if (currentTime === time3) {
    document.querySelector('#hour-3 .input-group-text').style.backgroundColor="#FFB6C1"; 
    document.querySelector('#hour-3 .form-control').style.backgroundColor="#FFB6C1"

} else if (currentTime < time3) {
    document.querySelector('#hour-3 .input-group-text').style.backgroundColor="#5bb1cd"; 
    document.querySelector('#hour-3 .form-control').style.backgroundColor="#5bb1cd"; 
}; 

// color changer rules for 4pm 
if ( currentTime > time4){
    document.querySelector('#hour-4 .input-group-text').style.backgroundColor="#D3D3D3"; 
    document.querySelector('#hour-4 .form-control').style.backgroundColor="#D3D3D3"; 

} else if (currentTime === time4) {
    document.querySelector('#hour-4 .input-group-text').style.backgroundColor="#FFB6C1"; 
    document.querySelector('#hour-4 .form-control').style.backgroundColor="#FFB6C1"

} else if (currentTime < time4) {
    document.querySelector('#hour-4 .input-group-text').style.backgroundColor="#5bb1cd"; 
    document.querySelector('#hour-4 .form-control').style.backgroundColor="#5bb1cd"; 
}; 

// color changer rules for 5pm 
if ( currentTime > time5){
    document.querySelector('#hour-5 .input-group-text').style.backgroundColor="#D3D3D3"; 
    document.querySelector('#hour-5 .form-control').style.backgroundColor="#D3D3D3"; 

} else if (currentTime === time5) {
    document.querySelector('#hour-5 .input-group-text').style.backgroundColor="#FFB6C1"; 
    document.querySelector('#hour-5 .form-control').style.backgroundColor="#FFB6C1"

} else if (currentTime < time5) {
    document.querySelector('#hour-5 .input-group-text').style.backgroundColor="#5bb1cd"; 
    document.querySelector('#hour-5 .form-control').style.backgroundColor="#5bb1cd"; 
};

// color changer rules for 06pm 
if ( currentTime > time06){
    document.querySelector('#hour-06 .input-group-text').style.backgroundColor="#D3D3D3"; 
    document.querySelector('#hour-06 .form-control').style.backgroundColor="#D3D3D3"; 

} else if (currentTime === time06) {
    document.querySelector('#hour-06 .input-group-text').style.backgroundColor="#FFB6C1"; 
    document.querySelector('#hour-06 .form-control').style.backgroundColor="#FFB6C1"

} else if (currentTime < time06) {
    document.querySelector('#hour-06 .input-group-text').style.backgroundColor="#5bb1cd"; 
    document.querySelector('#hour-06 .form-control').style.backgroundColor="#5bb1cd"; 
};

// color changer rules for 07pm 
if ( currentTime > time07){
    document.querySelector('#hour-07 .input-group-text').style.backgroundColor="#D3D3D3"; 
    document.querySelector('#hour-07 .form-control').style.backgroundColor="#D3D3D3"; 

} else if (currentTime === time07) {
    document.querySelector('#hour-07 .input-group-text').style.backgroundColor="#FFB6C1"; 
    document.querySelector('#hour-07 .form-control').style.backgroundColor="#FFB6C1"

} else if (currentTime < time07) {
    document.querySelector('#hour-07 .input-group-text').style.backgroundColor="#5bb1cd"; 
    document.querySelector('#hour-07 .form-control').style.backgroundColor="#5bb1cd"; 
};

// color changer rules for 08pm 
if ( currentTime > time08) {
    document.querySelector('#hour-08 .input-group-text').style.backgroundColor="#D3D3D3"; 
    document.querySelector('#hour-08 .form-control').style.backgroundColor="#D3D3D3"; 

} else if (currentTime === time08) {
    document.querySelector('#hour-08 .input-group-text').style.backgroundColor="#FFB6C1"; 
    document.querySelector('#hour-08 .form-control').style.backgroundColor="#FFB6C1"

} else if (currentTime < time08) {
    document.querySelector('#hour-08 .input-group-text').style.backgroundColor="#5bb1cd"; 
    document.querySelector('#hour-08 .form-control').style.backgroundColor="#5bb1cd"; 
}; 

// color changer rules for 09pm 
if (currentTime > time09){
    document.querySelector('#hour-09 .input-group-text').style.backgroundColor="#D3D3D3"; 
    document.querySelector('#hour-09 .form-control').style.backgroundColor="#D3D3D3"; 

} else if (currentTime === time09) {
    document.querySelector('#hour-09 .input-group-text').style.backgroundColor="#FFB6C1"; 
    document.querySelector('#hour-09 .form-control').style.backgroundColor="#FFB6C1"

} else if  (currentTime < time09) {
    document.querySelector('#hour-09 .input-group-text').style.backgroundColor="#5bb1cd"; 
    document.querySelector('#hour-09 .form-control').style.backgroundColor="#5bb1cd"; 
}



