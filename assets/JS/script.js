var keyCode = document.getElementById("keyCode");
var sectionOne = document.querySelector(".first-to-go");
var sectionTwo = document.querySelector(".section-2");

// key boxes
var show_key = document.getElementById("key");
var show_location = document.getElementById("location");
var show_which = document.getElementById("which");
var show_code = document.getElementById("code");

function pageHandler(event) {
  sectionOne.setAttribute("style", "display: none !important");
  sectionTwo.setAttribute("style", "display: block !important");

  show_key.textContent = event.key;
  show_location.textContent = event.location;
  show_which.textContent = event.which;
  show_code.textContent = event.code;

  keyCode.textContent = event.which;
}

document.body.addEventListener("keydown", pageHandler);
