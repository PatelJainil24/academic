const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const mobileToggle = $('.mobile-toggle');
const navLinks = $('#nav-links');
const toast = $('#toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

mobileToggle.addEventListener('click', () => {
  const isOpen = mobileToggle.getAttribute('aria-expanded') === 'true';
  mobileToggle.setAttribute('aria-expanded', String(!isOpen));
  mobileToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  navLinks.classList.toggle('open', !isOpen);
});

$$('.nav-links a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  mobileToggle.setAttribute('aria-expanded', 'false');
}));

$('#nav-search').addEventListener('submit', (event) => {
  event.preventDefault();
  const term = new FormData(event.currentTarget).get('q').trim();
  if (!term) {
    $('#search').focus();
    showToast('Type a skill or course to begin searching.');
    return;
  }
  window.location.href = `courses.html?q=${encodeURIComponent(term)}`;
});

$$('.socials a, footer a[href^="#"]').forEach((link) => link.addEventListener('click', (event) => {
  const target = link.getAttribute('href');
  if (target === '#' || ['#privacy', '#terms', '#help'].includes(target)) {
    event.preventDefault();
    showToast('This demo link is ready to connect to your final destination.');
  }
}));

const storyModal = $('#story-modal');
const inquiryModal = $('#inquiry-modal');
let activeModal = null;
let modalTrigger = null;

function openModal(modal, trigger) {
  activeModal = modal;
  modalTrigger = trigger;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  $('.modal-close', modal).focus();
}

function closeModal(modal = activeModal) {
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  activeModal = null;
  modalTrigger?.focus();
  modalTrigger = null;
}

$('#watch-story').addEventListener('click', () => {
  openModal(storyModal, $('#watch-story'));
});

$('#open-inquiry').addEventListener('click', () => openModal(inquiryModal, $('#open-inquiry')));

$$('[data-close-modal]').forEach((button) => button.addEventListener('click', () => closeModal(button.closest('.modal'))));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && activeModal) closeModal();
});

$('#inquiry-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(event.currentTarget).get('name').trim();
  closeModal(inquiryModal);
  event.currentTarget.reset();
  showToast(`Thanks, ${name}! A career advisor will contact you shortly.`);
});

$('#email-form').addEventListener('submit', (event) => {
  event.preventDefault();
  showToast('Welcome to EduMall — check your inbox to continue!');
  event.currentTarget.reset();
});

$('#year').textContent = new Date().getFullYear();

if (new URLSearchParams(window.location.search).get('inquire') === '1') {
  openModal(inquiryModal, $('#open-inquiry'));
}
