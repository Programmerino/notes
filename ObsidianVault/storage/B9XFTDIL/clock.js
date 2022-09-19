jQuery(function(){
    if(jQuery('.live-clock').length > 0){
        updateClock();
        setInterval('updateClock()', 1000 );
    }
})

function updateClock ( )
{

    var m_names = new Array("January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"),
        d_names = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    
    var currentTime = new Date ( ),
        curr_day = currentTime.getDay(),
        curr_date = currentTime.getDate(),
        curr_month = currentTime.getMonth(),
        curr_year = currentTime.getFullYear(),
        currentHours = currentTime.getHours ( ),
        currentMinutes = currentTime.getMinutes ( ),
        currentSeconds = currentTime.getSeconds ( );
  
    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
  
    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
  
    // Convert the hours component to 12-hour format if needed
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
  
    // Convert an hours component of "0" to "12"
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
  
    // Compose the string for display
    //var currentTimeString = d_names[curr_day] + ", " + m_names[curr_month] + " " + curr_date + ", " + curr_year + " "+currentHours + ":" + currentMinutes + ":"+ currentSeconds + timeOfDay;
    var currentTimeString = d_names[curr_day] + ", " + m_names[curr_month] + " " + curr_date + ", " + curr_year + " "+currentHours + ":" + currentMinutes + " " + timeOfDay;
  
    // Update the time display
    //document.getElementById("clock").firstChild.nodeValue = currentTimeString;
    jQuery('.live-clock').html(currentTimeString);
}