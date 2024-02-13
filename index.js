const navToggle = document.querySelector('#navToggle');
const navList = document.querySelector('#navList');
const toggleIcon = document.querySelector('.toggle-icon');

const iconMenuClose = './assets/images/icon-menu-close.svg';
const iconMenuOpen = './assets/images/icon-menu.svg';

navToggle.addEventListener('click', () => {
  navList.classList.toggle('opened');

  if (navList.classList.contains('opened')) {
    toggleIcon.src = iconMenuClose;
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    toggleIcon.src = iconMenuOpen;
    navToggle.setAttribute('aria-expanded', 'false');
    navList.removeAttribute('class');
  }
});
