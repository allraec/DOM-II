// Your code goes here


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseover' , (e) => {
        e.target.style.color = 'red';
    });

    link.addEventListener('mouseout' , (e) => {
        e.target.style.color = '#212529';
    });
});