window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("sticky-header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset === 0) {
    header.classList.remove("sticky-theme");
  } else {
    header.classList.add("sticky-theme");
  }
}

var btnSwitchDark = document.getElementById("switch-dark");
var btnSwitchLight = document.getElementById("switch-light");
btnSwitchLight.style.display = "none";

btnSwitchDark.onclick = function () {
  document.getElementById("studious-body").classList.remove("light-mode");
  document.getElementById("studious-body").classList.add("dark-mode");
  btnSwitchDark.style.display = "none";
  btnSwitchLight.style.display = "block";
};

btnSwitchLight.onclick = function () {
  document.getElementById("studious-body").classList.remove("dark-mode");
  document.getElementById("studious-body").classList.add("light-mode");
  btnSwitchDark.style.display = "block";
  btnSwitchLight.style.display = "none";
};