var menuMobile = document.querySelector('.menu-mobile');

document.querySelector('.icono-menu').addEventListener('click', function () {
    if (menuMobile.classList.contains('show')) {
        menuMobile.classList.remove('show');
    } else {
        menuMobile.classList.add('show');
    }
});