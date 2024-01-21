// Display of the current date and time
function displayTime() {
var currentTime = dayjs().format('dddd, MMMM D, YYYY, h:mm A');
$('#currentDay').text(currentTime);
}
// Create the time blocks with the columns for working hours
function timeBlocks() {
    var container = $('.container')
    var currentHour = dayjs().hour()
    
    for (var i = 9; i <= 17 ; i++) {
        var timeBlock = $('<div>').addClass('row time-block');
        var timeColumn = $('<div>').addClass('col-1 hour').text(dayjs().hour(i).format('hA'))
        timeBlock.append(timeColumn)

        container.append(timeBlock)
    }
}
// Add the save button for each column 
// Add the text area for user to input
// Create the classes based on past present and future
// Save the uset input in the local storage
displayTime();
timeBlocks();