var date = new Date(); console.log(date);
var hour = date.getHours();console.log(hour);
var day = date.getDate();
var sufix;

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var oneDay = weekday[date.getDay()];

var monthInYear = new Array();
monthInYear[0] = "January";
monthInYear[1] = "February";
monthInYear[2] = "March";
monthInYear[3] = "April";
monthInYear[4] = "May";
monthInYear[5] = "June";
monthInYear[6] = "July";
monthInYear[7] = "August";
monthInYear[8] = "September";
monthInYear[9] = "October";
monthInYear[10] = "November";
monthInYear[11] = "December";
var month = monthInYear[date.getMonth()];

console.log("Current date: " + oneDay + ", " + month + " " + day);
console.log("Type of day is: " + typeof(day));
var lastDigit = day.toString().slice(-1);
console.log(lastDigit);
console.log( " type of LastD " + typeof(lastDigit))
lastDigit =  parseInt(lastDigit)
console.log( " type of LastD " + typeof(lastDigit))
//var d = date.getDate();
//if (10<day<20){sufix = "th"}
// if(day<10 || day>20 && lastDigit ===1){sufix = "st";}
// else if((day<10 || day>20) && lastDigit ===2){sufix = "nd";}
// else if((day<10 || day>20) && lastDigit ==3){sufix = "rd";}
// else {sufix = "th";}
sufix = suf(day);
$("#currentDay").html(oneDay + ", " + month + " " + day + sufix.sup());
//var local = date.toLocaleTimeString();

var oneP = parseInt($(".one").text()) + 12;
var timeBlock1 = $(".1pm");
fun(oneP, timeBlock1);
var saveBtn1 = $(".1");
var Key1 = "1PM";
save(timeBlock1, saveBtn1, Key1);
//var saveData = save(timeBlock,saveBtn1, Key1);
//timeBlock.val(saveData);

var twoP = parseInt($(".two").text()) + 12;
var timeBlock2 = $(".2pm");
fun(twoP, timeBlock2);
var saveBtn2 = $(".2");
var key2 = "2PM";
save(timeBlock2, saveBtn2, key2);
//var saveData2 = save(timeBlock2, saveBtn2, key2);
//console.log(saveData2);
var threeP = parseInt($(".three").text()) + 12;
var timeBlock3 = $(".3pm");
fun(threeP, timeBlock3);
var saveBtn3 = $(".3");
var key3 = "3PM";
save(timeBlock3, saveBtn3, key3);

console.log(oneP);
function fun(hour, block)
{
    hr = date.getHours();
    if (hour === hr){ block.addClass("present");}
    else if (hour > hr) {block.addClass("future");}
    else {block.addClass("past");}

}

function suf(day) {
    if (day >= 11 && day <= 13) {
        return "th";
    }
    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}
var tasks = [];

function save(input, saveBtn, key)
{
    
    saveBtn.on("click", function(event)
    {  
        event.preventDefault();
        localStorage.setItem(key, input.val());
    });
    autosave(input, key); 

}
function autosave(area, key) 
{
window.onload = function (){
    ///if (localStorage.getItem(key))
area.val(localStorage.getItem(key))};
}

