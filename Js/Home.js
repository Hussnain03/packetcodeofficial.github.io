function validateForm() {
  var name = document.myForm.name.value;
  var email = document.myForm.email.value;
  var mobile = document.myForm.mobile.value;
  var password = document.myForm.password.value;

  if (name == null || name == "") {
    alert("Name can't be blank");
    return false;
  }
  if (email == null || email == "") {
    alert("Email can't be blank");
    return false;
  }
  if (mobile == null || mobile == "") {
    alert("Mobile can't be blank");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
}

function myFunction() {
  window.open("Contact.html");
  window.open("Contact.html");
}
function mysubmit(){
  window.open("#footer0")
}
