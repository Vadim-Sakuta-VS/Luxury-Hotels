let hamburgerToggle = document.querySelector('.hamburger-toggle');
let navigation = document.querySelector('.nav');

hamburgerToggle.addEventListener('click', toggleMenu);

function toggleMenu() {
    hamburgerToggle.classList.toggle('hamburger-toggle--active');
    navigation.classList.toggle('nav--active');
    document.body.classList.toggle('overflow-hidden');
}

let swiper = new Swiper('.swiper-container', {
    loop: true,
    allowTouchMove: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
            allowTouchMove: false,
        }
    }
});