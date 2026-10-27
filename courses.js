const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const mobileToggle = $('.mobile-toggle');
const navLinks = $('#nav-links');
const searchInput = $('#search');
const cards = $$('.catalog-card');
const emptyState = $('#catalog-empty');
const resultCount = $('#result-count');
const toast = $('#toast');
let activeCategory = 'all';
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function applyFilters() {
  const term = searchInput.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach((card) => {
    const matchesCategory = activeCategory === 'all' || card.dataset.category === activeCategory;
    const matchesSearch = !term || card.dataset.search.includes(term);
    card.hidden = !(matchesCategory && matchesSearch);
    if (!card.hidden) visible += 1;
  });
  resultCount.textContent = `Showing ${visible} ${visible === 1 ? 'course' : 'courses'}`;
  emptyState.hidden = visible !== 0;
}

function setCategory(category) {
  activeCategory = category;
  $$('.catalog-filters button').forEach((button) => button.classList.toggle('active', button.dataset.category === category));
  applyFilters();
  document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth' });
}

mobileToggle.addEventListener('click', () => {
  const open = mobileToggle.getAttribute('aria-expanded') === 'true';
  mobileToggle.setAttribute('aria-expanded', String(!open));
  mobileToggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
  navLinks.classList.toggle('open', !open);
});

$$('.catalog-filters button').forEach((button) => button.addEventListener('click', () => {
  setCategory(button.dataset.category);
}));

searchInput.addEventListener('input', applyFilters);
$('#course-search').addEventListener('submit', (event) => {
  event.preventDefault();
  applyFilters();
  document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth' });
});

$('#reset-courses').addEventListener('click', () => {
  searchInput.value = '';
  setCategory('all');
});

$$('.socials a').forEach((link) => link.addEventListener('click', (event) => {
  event.preventDefault();
  showToast('This demo link is ready for your social profile.');
}));

$('#year').textContent = new Date().getFullYear();

const pageParams = new URLSearchParams(window.location.search);
const initialSearch = pageParams.get('q');
if (initialSearch) {
  searchInput.value = initialSearch;
  applyFilters();
}
