// Your code goes here

//1 & 2
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseover' , (e) => {
        e.target.style.color = 'red';
    });

    link.addEventListener('mouseout' , (e) => {
        e.target.style.color = '#212529';
    });
});

//3
const homeLink = document.querySelector(".nav-link");
window.addEventListener("load", () => {
    homeLink.textContent = "Stay Home";
    
});

//4
const header = document.querySelector('.main-navigation');
header.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "olive";
});

//5 & 6
const headerImg = document.querySelector('.intro img');
headerImg.addEventListener("dblclick", (e) => {
    e.target.style.transform = "scale(3)";
});
headerImg.addEventListener("mouseleave", (e) => {
    e.target.style.transform = "scale(1)";
});

//7
const contentDestinationImg = document.querySelector('.content-destination img');
contentDestinationImg.addEventListener("contextmenu", (e) => {
    e.target.style.border = "5px solid orange";
});

//8 & 9
const body = document.querySelector('html');
body.addEventListener("keydown", (e) => {
    e.target.style.backgroundColor = "lime";
});
body.addEventListener("keyup", (e) => {
    e.target.style.backgroundColor = "yellow";
});

//10
window.addEventListener("copy", () => {
    alert("Copied to clipboard!");
});

//preventDefault task
homeLink.href = "http://google.com";
homeLink.addEventListener("click", (e) => {
    e.preventDefault();
});


//stop propagation task
const contentDestinationContainer = document.querySelector('.content-destination');
contentDestinationContainer.addEventListener("click", (e) => {
    e.target.style.border = "5px solid purple";
});

contentDestinationImg.addEventListener("click", (e) => {
    e.target.style.opacity = ".5";
    e.stopPropagation();
});