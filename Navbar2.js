 const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navbar = document.getElementById('navbar');
  const colorPicker = document.getElementById('navbarColor');
  const modeToggle = document.getElementById('modeToggle');
  const body = document.body;

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navLinks.classList.toggle('active');
    }
  });

  // Change navbar background color dynamically
  colorPicker.addEventListener('input', (e) => {
    navbar.style.backgroundColor = e.target.value;
  });

  // Dark/Light mode toggle
  modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode')) {
      modeToggle.textContent = '☀️';
    } else {
      modeToggle.textContent = '🌙';
    }
  });

  // Set initial navbar bg color on load
  window.addEventListener('DOMContentLoaded', () => {
    navbar.style.backgroundColor = colorPicker.value;
  });