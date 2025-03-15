document.addEventListener('DOMContentLoaded', function () {
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navUl = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('show');
        hamburger.textContent = navUl.classList.contains('show') ? '✕' : '☰';
    });

    // Dynamic Footer Content
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
});