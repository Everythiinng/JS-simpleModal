'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// document.querySelectorAll(); Grabs all the items from the HTML
// folder and puts them like in an array that you can go through
// buttons for example

const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  console.log('Button Clicked!');

  // We can remove more classes from HTML .remove('hidden', 'not-Hidden', etc);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Make all three buttons with the same eventlistener with for()
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// But we dont call a function from up like this closeModal(); but just closeModal
// Cuz we have the function up declared and is more Readable and DRY :D
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// keydown means whatever key you press it will run the function
// function(e) <= this argument is the keydown, because in JS with the event
// the value or things that happen when the event is executed will be passed at the
// function
document.addEventListener('keydown', function (e) {
  // This will check if Esc is hit and will run the function.
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
