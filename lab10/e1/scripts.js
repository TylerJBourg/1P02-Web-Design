//The starting time
var start = new Date();
var startMilli = start.getTime();

function stoptime() {
  //The time when wwe press the buttton
  var end = new Date();
  var endMilli = end.getTime();
//Subtract end time from start time
  var diffMilli = endMilli - startMilli;

  //Converted the diffrence into seconds
  var diffSec = diffmilli/1000;

//Alert the user with a popup
  alert("the number of seconds is: " diffsec);

}
