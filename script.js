// Change navbar background color on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Toggle menu on small screens
const logo = document.querySelector('.logo');
const navbar = document.querySelector('.navbar ul');

logo.addEventListener('click', () => {
    navbar.classList.toggle('show');
});
