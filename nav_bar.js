const nav = document.querySelector('.nav_links');
const navOpen = document.querySelector('#nav-open');
const navClose = document.querySelector('#nav-close');

const openNav = () => {
  nav.style.display = 'flex';
  navOpen.style.display = 'none';
  navClose.style.display = 'inline-block';
};

navOpen.addEventListener('click', openNav);

const closeNav = () => {
  nav.style.display = 'none';
  navOpen.style.display = 'inline-block';
  navClose.style.display = 'none';
};

navClose.addEventListener('click', closeNav);
