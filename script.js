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
var key1 = "1pm";

var twoP = parseInt($(".two").text()) + 12;
var timeBlock2 = $(".2pm");
fun(twoP, timeBlock2);
var saveBtn2 = $(".2");
var key2 = "2pm";
//save(timeBlock2, saveBtn2, key2);
//var saveData2 = save(timeBlock2, saveBtn2, key2);
//console.log(saveData2);
var threeP = parseInt($(".three").text()) + 12;
var timeBlock3 = $(".3pm");
fun(threeP, timeBlock3);
var saveBtn3 = $(".3");
var key3 = "3pm";
//save(timeBlock3, saveBtn3, key3);

var fourP = parseInt($(".four").text()) + 12;
var timeBlock4 = $(".4pm");
fun(fourP, timeBlock4);
var saveBtn4 = $(".4");
var key4 = "4pm";
//save(timeBlock4, saveBtn4, key4);

var fiveP = parseInt($(".five").text()) + 12;
var timeBlock5 = $(".5pm");
fun(fiveP, timeBlock5);
//fun(oneP, timeSlice);
var saveBtn5 = $(".5");
var key5 = "5pm";

var nineA = parseInt($(".nine").text());
var timeBlock9 = $(".9am");
fun(nineA, timeBlock9);
//fun(oneP, timeSlice);
var saveBtn9 = $(".9");
var key9 = "9am";
// save(timeSlice, saveBtn);
var tenA = parseInt($(".ten").text());
var timeBlock10 = $(".10am");
fun(tenA, timeBlock10);
//fun(oneP, timeSlice);
var saveBtn10 = $(".10");
var key10 = "10am";
// save(timeSlice, saveBtn);
var elevenA = parseInt($(".eleven").text());
var timeBlock11 = $(".11am");
fun(elevenA, timeBlock11);
//fun(oneP, timeBlock11);
var saveBtn11 = $(".11");
var key11 = "11am";
// save(timeSlice, saveBtn);
var twelveP = parseInt($(".twelve").text());
var timeBlock12 = $(".12pm");
fun(twelveP, timeBlock12);
//fun(oneP, timeSlice);
var saveBtn12 = $(".12");
var key12 = "12pm";
// save(timeSlice, saveBtn);

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
    
    saveBtn1.on("click", function(event)
    {  
        event.preventDefault();
        var input = $(this).attr("data-input");
        console.log(input);
        var data = $("." + input).val();
        console.log(data);
        localStorage.setItem(input, data);
        //data.val() = (localStorage.getItem(input));
    });
    

    saveBtn2.on("click", function(event)
    {  
        event.preventDefault();
        var input = $(this).attr("data-input");
        console.log(input);
        var data = $("." + input).val();
        console.log(data);
        localStorage.setItem(input, data);
        //data.val(localStorage.getItem(input));
    });
    saveBtn3.on("click", function(event)
    {  
        event.preventDefault();
        var input = $(this).attr("data-input");
        console.log(input);
        var data = $("." + input).val();
        console.log(data);
        localStorage.setItem(input, data);
        //data.val(localStorage.getItem(input));
    });
    saveBtn4.on("click", function(event)
    {  
        event.preventDefault();
        var input = $(this).attr("data-input");
        console.log(input);
        var data = $("." + input).val();
        console.log(data);
        localStorage.setItem(input, data);
        //data.val(localStorage.getItem(input));
    });
    saveBtn5.on("click", function(event)
    {  
        event.preventDefault();
        var input = $(this).attr("data-input");
        console.log(input);
        var data = $("." + input).val();
        console.log(data);
        localStorage.setItem(input, data);
        //data.val(localStorage.getItem(input));
    });
    saveBtn9.on("click", function(event)
    {  
        event.preventDefault();
        var input = $(this).attr("data-input");
        console.log(input);
        var data = $("." + input).val();
        console.log(data);
        localStorage.setItem(input, data);
        //data.val(localStorage.getItem(input));
    });
    saveBtn10.on("click", function(event)
    {  
        event.preventDefault();
        var input = $(this).attr("data-input");
        console.log(input);
        var data = $("." + input).val();
        console.log(data);
        localStorage.setItem(input, data);
        //data.val(localStorage.getItem(input));
    });
    saveBtn11.on("click", function(event)
    {  
        event.preventDefault();
        var input = $(this).attr("data-input");
        console.log(input);
        var data = $("." + input).val();
        console.log(data);
        localStorage.setItem(input, data);
        //data.val(localStorage.getItem(input));
    });

    saveBtn12.on("click", function(event)
    {  
        event.preventDefault();
        var input = $(this).attr("data-input");
        console.log(input);
        var data = $("." + input).val();
        console.log(data);
        localStorage.setItem(input, data);
        //data.val(localStorage.getItem(input));
    });
    // window.onload = function (){
    // if (localStorage.getItem(key2))
    // timeBlock2.val(localStorage.getItem(key2))};
    window.onload = function ()
    {
        //if (localStorage.getItem(key1))
        timeBlock1.val(localStorage.getItem(key1));
        timeBlock2.val(localStorage.getItem(key2));
        timeBlock3.val(localStorage.getItem(key3));
        timeBlock4.val(localStorage.getItem(key4));
        timeBlock5.val(localStorage.getItem(key5));
        timeBlock9.val(localStorage.getItem(key9));
        timeBlock10.val(localStorage.getItem(key10));
        timeBlock11.val(localStorage.getItem(key11));
        timeBlock12.val(localStorage.getItem(key12));
    
        };