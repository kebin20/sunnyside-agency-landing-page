// Import stylesheets
import './style.css';

/* Hamburger Menu Toggle */

const hamburgerMenuButton = document.getElementById('menu-btn');
const hamburgerMenu = document.getElementById('nav-links')

function hamburgerMenuToggle() {
  if (hamburgerMenu.style.display === 'block') {
    hamburgerMenu.style.display = 'none';
  } else {
    hamburgerMenu.style.display = 'block';
  }
}

hamburgerMenuButton.addEventListener('click', hamburgerMenuToggle);
