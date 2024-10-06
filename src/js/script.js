// Select the hamburger button and the menu
const hamburgerButton = document.getElementById('hamburger-button');
const navbarHamburger = document.getElementById('navbar-hamburger');

// Add click event listener to toggle the hidden class
hamburgerButton.addEventListener('click', () => {
  navbarHamburger.classList.toggle('hidden');
});
