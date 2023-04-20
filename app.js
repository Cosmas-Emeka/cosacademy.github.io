var navLinks = document.getElementById("navLinks");
var menuIcon = document.getElementsById("menuIcon");
var head = document.getElementById("head");


function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-300px";
}

function changeColor() {
    head.style.background = "rgba(14, 9, 30, 0.7)"
}