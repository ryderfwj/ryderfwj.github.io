function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

$(document).ready(function () {
  $("#overlay").click(function () {
    off();
  });
});