const toggle = document.querySelector('.mobile-menu-toggle');
const menu = document.getElementById('mobileMenu');
const close = document.getElementById('closeMenu');

toggle.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.classList.add('menu-open');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.classList.remove('menu-open');
});