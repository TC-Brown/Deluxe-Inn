document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = navMenu ? navMenu.querySelectorAll('a') : [];

  if (menuButton && navMenu) {
    menuButton.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
    });
  }

  if (navLinks && navLinks.forEach) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (!navMenu.classList.contains('hidden')) {
          navMenu.classList.add('hidden');
        }
      });
    });
  }

  // Simple form submission message
  const form = document.getElementById('reservation-form');
  const message = document.getElementById('form-message');

  if (form && message) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      message.textContent = 'Thank you for your reservation request! We will be in touch shortly.';
      message.classList.remove('hidden');
      form.reset();
    });
  }
});
