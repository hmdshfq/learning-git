let hamburgerIcon = document.querySelector('#hamburger-icon');
let navigationHeader = document.querySelector('.navigation-header');

if (hamburgerIcon && navigationHeader) {
    hamburgerIcon.addEventListener('click', function () {
        hamburgerIcon.classList.toggle('active');
        navigationHeader.classList.toggle('active');
    });
}
