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
  // messageEl.parentElement.removeChild(messageEl);
});
