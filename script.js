// For the top navbar menu (mobile)
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const innerMenuBtn = document.getElementById('innerMenuBtn');
const boxLinks = document.getElementById('boxLinks');

// Toggle main navbar links (mobile)
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Toggle inner box menu links
innerMenuBtn.addEventListener('click', () => {
  boxLinks.classList.toggle('show');
});

// Optional: Hide inner menu links by default
boxLinks.classList.remove('show');
