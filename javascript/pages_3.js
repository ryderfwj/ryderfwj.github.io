var audioTrack1 = document.getElementById("audioControl1");
var audioTrack2 = document.getElementById("audioControl2");
var oddEven = 1;

function on() {
  document.getElementById("warnOverlay").style.display = "block";
}

function off() {
  document.getElementById("warnOverlay").style.display = "none";
}

function audioVolume() {
  audioTrack1.volume = 0.50;
  audioTrack2.volume = 0.25;
}

function pauseAudio() {
  if (oddEven & 1) {
    audioTrack1.pause();
  } else {
    audioTrack2.pause();
  }
}

function pauseBothAudio() {
  audioTrack2.pause();
  audioTrack1.pause();
}

function resumeAudio() {
  if (oddEven & 1) {
    audioTrack1.play();
  } else {
    audioTrack2.play();
  }
}

$(document).ready(function () {
  pauseBothAudio();

  audioVolume();

  $("#warnOverlay").click(function () {
    off();
    resumeAudio();
  });

  $("#audioSlider").click(function () {
    if (oddEven & 1) {
      if (audioTrack1.paused) {
        resumeAudio();
      } else {
        pauseAudio();
      }
    } else {
      if (audioTrack2.paused) {
        resumeAudio();
      } else {
        pauseAudio();
      }
    }
  });

  audioTrack1.addEventListener('ended', function () {
    audioTrack2.play();
    oddEven++;
  });

  audioTrack2.addEventListener('ended', function () {
    audioTrack1.play();
    oddEven++;
  });
});