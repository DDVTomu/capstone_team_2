window.onscroll = function() {myFunction()};

var header = document.getElementById("sticky-header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-theme");
  } else {
    header.classList.remove("sticky-theme");
  }
}