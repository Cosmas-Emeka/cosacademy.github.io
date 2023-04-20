var navLinks = document.getElementById("navLinks");
var menuIcon = document.getElementsById("menuIcon");
var head = document.getElementById("head");


function showMenu() {
    navLinks.style.right = "30vw";
}

function hideMenu() {
    navLinks.style.right = "-50vw";
}

function changeColor() {
    head.style.background = "rgba(14, 9, 30, 0.7)"
}