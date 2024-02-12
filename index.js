const navToggle = document.querySelector('#navToggle');
const navList = document.querySelector('#navList');
const toggleIcon = document.querySelector('.toggle-icon');

const iconMenuClose = '/assets/images/icon-menu-close.svg';
const iconMenuOpen = '/assets/images/icon-menu.svg';

navToggle.addEventListener('click', () => {
  navList.classList.toggle('opened');

  navList.classList.contains('opened')
    ? (toggleIcon.src = iconMenuClose)
    : (toggleIcon.src = iconMenuOpen);

  if (!navList.classList.contains('opened')) {
    navList.removeAttribute('class');
  }
});
