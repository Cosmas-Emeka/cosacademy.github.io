var navLinks = document.getElementById("navLinks");
var menuIcon = document.getElementsById("menuIcon");
var head = document.getElementById("head");


function showMenu() {
    navLinks.style.left = "0%";
}

function hideMenu() {
    navLinks.style.left = "-100%";
}

function changeColor() {
    head.style.background = "rgba(14, 9, 30, 0.7)"
}