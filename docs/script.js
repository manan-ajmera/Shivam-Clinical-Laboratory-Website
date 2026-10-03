// Navigation and contact actions also remain usable without JavaScript.
document.documentElement.classList.add('js');
const menu = document.querySelector('#menu-button');
const nav = document.querySelector('#nav');
menu.hidden = false;
function closeMenu() {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}
menu.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', String(nav.classList.toggle('open')));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    closeMenu();
    menu.focus();
  }
});
document.querySelectorAll('[data-enquiry]').forEach(link => {
  link.href = 'mailto:shivampathologylaboratory1974@outlook.com?subject=' +
    encodeURIComponent('Enquiry: ' + link.dataset.enquiry);
});
document.querySelector('#year').textContent = new Date().getFullYear();
