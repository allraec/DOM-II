// Your code goes here

let navlinks = document.querySelector(".nav");

//1
navlinks.addEventListener("mouseover", (event) =>{
    event.target.style.color = "magenta";
});

//2
navlinks.addEventListener("mouseout", (event) =>{
    event.target.style.color = "#212529";
});

let logo = document.querySelector(".intro img");

//3
logo.addEventListener("drag", (event) =>{
    event.target.style.cursor = "crosshair";
});


//4
logo.addEventListener("dblclick", (event) =>{
    event.target.style.cursor = "default";
});

let body = document.querySelector("body");

//5
body.addEventListener("keypress", (event) =>{
    event.target.style.backgroundColor = "pink";
});

//6
body.addEventListener("keyup", (event) =>{
    event.target.style.backgroundColor = "white";
});

//7
navlinks.addEventListener("focusin", (event) =>{
    event.target.style.textTransform = "uppercase";
});

//8
window.addEventListener("resize", (event) => {
    alert("Supersize ME!...")
});

let pics = document.querySelectorAll(".img-content img");

//9
pics[0].addEventListener("wheel", (event) => {
    event.target.style.opacity = "0.5";
});

//10
pics[1].addEventListener("contextmenu", (event) => {
    event.target.style.border = "3px dotted red";
});

let introp = document.querySelector(".intro p");
let intro = document.querySelector(".intro");

//Nesting and stopping propagation
intro.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "orange";
});

introp.addEventListener("click", (event) => {
    event.stopPropagation();
    event.target.style.fontSize = "30px";
});

let homeB = document.querySelectorAll(".nav a");

//Sets Home nav as google site and prevents event from redirecting to the site.
homeB[0].href = "http://google.com/";
homeB[0].addEventListener("click", (event) => {
    event.preventDefault();
});