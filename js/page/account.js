function calendar_modal(event)
{
    $('#calendarModal').modal('show');
    event.preventDefault();
}

function notification_modal(event)
{
    $('#notificationModal').modal('show');
    event.preventDefault();
}

function lost_modal(event)
{
    $('#lostModal').modal('show');
    event.preventDefault();
}

$("#calendar-submit").click(function() {
    $.ajax({
        type: "POST",
        url: "vet_calendar.php",
        data: $("#calendar-form").serialize(),
        success: function(data)
        {
            document.getElementById("calendar-response").innerHTML = data;
        }
    });

    return false;
});