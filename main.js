const navToggle = document.querySelector('.hamburger');

const navLink = document.querySelectorAll('.nav_link');

navToggle.addEventListener('click', ()=> {
    document.body.classList.toggle('nav_open');
});

navLink.forEach(link => {
    link.addEventListener('click' , () => {
        document.body.classList.remove('nav_open');
    });
});
