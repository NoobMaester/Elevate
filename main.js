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
//const send = document.getElementById('send');

const ok = document.getElementById('ok');

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(e){
        e.preventDefault();
        const inputs = document.querySelectorAll('.clear');
        const modal = document.getElementById('modal');

        //function sendMail(){
        emailjs.sendForm('service_l4a39wc', 'template_q5ox8np', '#contact-form')
            .then(function(res){
                console.log('SUCCESS!', res.status, res.text);
                inputs.forEach(input => input.value = '');
                modal.style.display = 'flex';
            }, function(error){
                console.log('FAILED...', error);
            });
        
        //}
        //send.addEventListener('click', sendMail);
    });
    ok.addEventListener('click', function(e){
        modal.style.display = 'none'
    })
}