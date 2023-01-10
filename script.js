'use strict';

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav__links');
const navHeight = header.getBoundingClientRect().height;
const allSections = document.querySelectorAll('.section');

// Page Navigation / Scrolling (Button) / Sticky Navigation

//Event delegation
navLinks.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const linkId = e.target.getAttribute('href');
    document.querySelector(linkId).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

const stickyNavigation = entries => {
  const [entry] = entries; // same as entries[0]
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNavigation, {
  root: null,
  threshold: 0,
  rootMargin: '-1px',
});

headerObserver.observe(header);

// Reveal Sections

const revalSections = (entries, observer) => {
  const [entry] = entries;
  const section = entry.target;

  if (entry.isIntersecting) {
    section.classList.remove('section--hidden');
    observer.unobserve(section);
  }
};

const sectionObserver = new IntersectionObserver(revalSections, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
});

// Lazy loading images

// Menu fade animation

// Cookies

// Modal Window

// Tabbed component

// SLider

// Event Handlers
