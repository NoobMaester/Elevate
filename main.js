//hamburger menu

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



//setting up emailJS

const ok = document.getElementById('ok');

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(e){
        e.preventDefault();

        const inputs = document.querySelectorAll('.clear');

        const alert = document.querySelector('.alert');

        
        emailjs.sendForm('service_l4a39wc', 'template_q5ox8np', '#contact-form')
            .then(function(res){
                console.log('SUCCESS!', res.status, res.text);
                inputs.forEach(input => input.value = '');
                alert.style.display = 'block';
            }, function(error){
                console.log('FAILED...', error);
            });

            //success message disappears after sometime.

            setTimeout(function(){
                alert.style.display = 'none'
            }, 5000);
        
    });
}