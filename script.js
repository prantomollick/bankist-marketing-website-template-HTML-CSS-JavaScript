'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/*
////////////////////////////////////////////////
////

//Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const headerEl = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
//.insertAdjacentHTML

const messageEl = document.createElement('div');
messageEl.classList.add('cookie-message');
// messageEl.textContent =
//   'We use cookied for improved functionality and analytics';

messageEl.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';

// headerEl.prepend(messageEl);
headerEl.append(messageEl);
// headerEl.append(messageEl.cloneNode(true));
// headerEl.before(messageEl);
// headerEl.after(messageEl.cloneNode(true));

//Delete Elements
document.querySelector('.btn--close--cookie').addEventListener('click', () => {
  // messageEl.remove();
  messageEl.parentElement.removeChild(messageEl);
});

//styles
messageEl.style.backgroundColor = '#37383d';
messageEl.style.width = '120%';

console.log(messageEl.style.color);
console.log(messageEl.style.backgroundColor);

console.log(getComputedStyle(messageEl).color);
console.log(getComputedStyle(messageEl).height);

messageEl.style.height =
  parseFloat(getComputedStyle(messageEl).height) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangeRed');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo);
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

//Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('src'));
//Data attribute
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('s');
logo.classList.remove('s');
logo.classList.toggle('s');
logo.classList.contains('s');
*/

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log('Current scroll (X/Y)', scrollX, scrollY);

  //dimentions of this viewport
  console.log(
    'Height/Width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // window.scrollTo(s1coords.left + scrollX, s1coords.top + scrollY);

  // window.scrollTo({
  //   left: s1coords.left + scrollX,
  //   top: s1coords.top + scrol lY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
