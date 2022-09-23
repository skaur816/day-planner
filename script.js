var now = moment();
console.log(now.format());

$(".cell-save").on("click", function () {
    var time = $(this).attr('id');
    console.log(time);
    // id =`${time}-text`   or time + "-text"  inputID = textarea id
    var inputID = '#' + time + "-text";
    var textInput = $(inputID).val();
    console.log(inputID);
    console.log(textInput);
    // localStorage.setItem(key, value) so inputID = key, textInput = value
    window.localStorage.setItem(inputID, textInput);
});

$(".cell-info").each(function () {
  
    var key = "#" + $(this).children().attr('id');

    var value = window.localStorage.getItem(key);
    $(key).text(value);
});
var scheduleSlot = $(".schedule-slot");

checkTime();

function checkTime() {
    var currentTime = moment()._d.getHours();
   
    scheduleSlot.each(function (i, element) {
        var infoTd = $(element).find(".cell-info");
        var dataTime = $(element).attr("data-time");
        if (dataTime == currentTime) {
            infoTd.addClass("present");
        } else if (dataTime <= currentTime) {
            infoTd.addClass("past");
        } else if (dataTime >= currentTime) {
            infoTd.addClass("future");
        } else {
            console.log("time check error");
        }
    });
}
var currentDate = now.format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);




    <><script src="https://code.jquery.com/jquery-3.4.1.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script><script src="script.js"></script></>