let hamburgerToggle = document.querySelector('.hamburger-toggle');
let navigation = document.querySelector('.nav');

hamburgerToggle.addEventListener('click', toggleMenu);

function toggleMenu() {
    hamburgerToggle.classList.toggle('hamburger-toggle--active');
    navigation.classList.toggle('nav--active');
    document.body.classList.toggle('overflow-hidden');
}