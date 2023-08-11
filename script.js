let hamburgerIcon = document.querySelector('#hamburger-icon');
let navLinks = document.querySelector('.nav-links');

if (hamburgerIcon && navLinks) {
    hamburgerIcon.addEventListener('click', function () {
        hamburgerIcon.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}
