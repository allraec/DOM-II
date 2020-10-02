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
})

