//this code from Professor, I modified it in my Booking site
$(document).ready(function() {
  $("#signUp").click(function() {
    var hold = $("#first").val();
    localStorage.setItem("firstname", hold);
    hold = $("#last").val();
    localStorage.setItem("lastname", hold);
    hold = $("#eadd").val();
    localStorage.setItem("email", hold);
    hold = $("#Date").val();
    localStorage.setItem("Date", hold);
    hold = $("#phonenum").val();
    localStorage.setItem("phonenum", hold);
    hold = $("#service").val();
    localStorage.setItem("service", hold);
    hold = $("#tech").val();
    localStorage.setItem("tech", hold);
    var url = "posted.html";
    $(location).attr('href', url);

  });
});
