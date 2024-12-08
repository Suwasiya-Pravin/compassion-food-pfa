// JavaScript for toggling the navigation menu on smaller screens
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});