function toggleMenu(){
    
    var menuIcon = document.querySelector('.menu');
    var closeIcon = document.querySelector('.close');
    var navLinkshome = document.querySelector('.nav-links-home');
    var navLinks = document.querySelector('.nav-links');

    menuIcon.classList.toggle('show');
    closeIcon.classList.toggle('show');
    navLinkshome.classList.toggle('show');
    navLinks.classList.toggle('show');
}

function closeMenu(){

    var menuIcon = document.querySelector('.menu');
    var closeIcon = document.querySelector('.close');
    var navLinkshome = document.querySelector('.nav-links-home');
    var navLinks = document.querySelector('.nav-links');

    menuIcon.classList.remove('show');
    closeIcon.classList.remove('show');
    navLinkshome.classList.remove('show');
    navLinks.classList.remove('show');
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here (e.g., sending data to a server)
    console.log('Form submitted!');
});
