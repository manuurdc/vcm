document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('menu-expanded');
        menu.classList.toggle('menu-collapsed');
    });
});
