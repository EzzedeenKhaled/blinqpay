const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation-links');
function closeMenu() {
  navigation.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open menu');
}
toggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.navigation')) closeMenu(); });
const dialog = document.querySelector('#account-dialog');
const status = dialog.querySelector('.form-status');
document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => {
  closeMenu();
  const signingIn = button.dataset.open === 'signin';
  document.querySelector('#dialog-title').textContent = signingIn ? 'Welcome back to Blinqpay' : 'Get started with Blinqpay';
  document.querySelector('#dialog-description').textContent = signingIn ? 'Account sign-in is not connected in this website preview.' : 'Leave your email to register your interest.';
  dialog.querySelector('form').reset();
  status.textContent = '';
  dialog.showModal();
}));
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  status.textContent = 'Thanks! This is a website preview; your email has not been sent. Registration will be available when Blinqpay is connected.';
});
