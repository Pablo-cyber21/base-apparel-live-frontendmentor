function checkEmail(str) {
  var re = /^[A-Z0-9._%+-]+@([A-Z0-9-]+ .)+[A-Z]{2,4}$/;
  return re.test(str);
}

function validate() {
  if (!checkEmail(document.email_form.EMail.value)) {
    alert("Please provide your Email!");
    email_form.EMail.focus();
    return false;
  }
}
