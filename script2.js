function getData() {

  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;

  localStorage.setItem("txt1", email);
  localStorage.setItem("txt2", name);
}

function addValues() {
  document.getElementById("data").innerHTML = localStorage.getItem("txt1");
  document.getElementById("data1").innerHTML = localStorage.getItem("txt2");
}
//matching password
function validPass() {
  var pass1 = document.getElementById('pass').value;
  var pass2 = document.getElementById('second_pass').value;
  if (pass1 !== pass2) {
    alert("Passwords need to match");
    return false;
  } else {
    return true;
  }
}
function submission() {
  //submit the form//
  document.getElementById('p2').innerHTML = document.getElementById('Textarea').value;
  document.getElementById('p3').innerHTML = document.getElementById('formControlInput').value;
}
