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

        // Add the save button for each column 

        var saveBtn = $('<button>').addClass('col-2 saveBtn').html('<i class="fas fa-save"></i>');
        timeBlock.append(saveBtn)

        // Add the text area for user to input

        var textArea = $('<textarea>').addClass('col-9 description');
        timeBlock.append(textArea)

        // Create the classes based on past present and future

        if (i < currentHour) {
            textArea.addClass('past');
          } else if (i === currentHour) {
            textArea.addClass('present');
          } else {
            textArea.addClass('future');
          }
          // Save the uset input in the local storage
          
          saveBtn.on('click', function () {
            var text = $(this).prev().val();
            var hour = $(this).parent().i() + 9; // Get the hour from the row index
            localStorage.setItem('hour-' + hour, text);
          });

    }
}




displayTime();
timeBlocks();