function on() {
  document.getElementById("warnOverlay").style.display = "block";
}

function off() {
  document.getElementById("warnOverlay").style.display = "none";
}

$(document).ready(function () {
  $("#warnOverlay").click(function () {
    off();
  });
});