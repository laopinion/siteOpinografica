function onSubmit(token) {
  alert('thanks ' + document.getElementById('field').value);
}

function validate(event) {
  event.preventDefault();
  if (!document.getElementById('field').value) {
    alert("You must add text to the required field");
  } else {
    grecaptcha.execute();
  }
}

function onload() {
  var element = document.getElementById('submit');
  element.onclick = validate;
}
