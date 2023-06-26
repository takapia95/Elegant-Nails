$(document).ready(function() {
  var message = "<h3> Thanks, " + localStorage.getItem("firstname") + " " + localStorage.getItem("lastname") + "!" + "</h3>";
  $("#thankstag").append(message);
  var message = "<p> Your appoinment is to get " + localStorage.getItem("service") + " with " + localStorage.getItem("tech") + " on " + localStorage.getItem("Date") + ". You will get a confirmation email at " + localStorage.getItem("email") + " and we will text you to this number " + localStorage.getItem("phonenum") + " one day in advance." + "</p>";
  $("#thankstag").append(message);
});
//I modified it from professor




