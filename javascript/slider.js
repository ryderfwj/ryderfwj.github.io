var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("club-banner-container");
  var dots = document.getElementsByClassName("slideshow-page");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" sel-grey", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " sel-grey";
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}