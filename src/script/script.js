// element dom
const numCard = document.querySelector('#card-num');
const mothInput = document.querySelector('#mothInput');
const monthCard = document.querySelector('#moth');
const yearInput = document.querySelector('#yearInput');
const yearCard = document.querySelector('#year');
const cvcInput = document.querySelector('#cvcInput');
const cvcCard = document.querySelector('#cvcCard');
const form = document.querySelector('#form');
const nameCard = document.querySelector('#name-card');
const button = document.querySelector('#confirm');

function changeValue (event) {
  event.value = addCommas(event.value.replace(/\D/g, ''));
  numCard.textContent = event.value;
}

function addCommas(value) {
  return value.replace(/(?=(\d{4})+(?!\d))/g, ' ');
}

function changeNameCard(event) {
  event.value = event.value.replace(/\d/g, '');
  nameCard.textContent = event.value;
}

function changeCVC(e){
  e.value = e.value.replace(/\D/, '')
}

mothInput.addEventListener('change', (e) => {
  monthCard.textContent = e.target.value;
})

yearInput.addEventListener('change',(e) => {
  yearCard.textContent = e.target.value;
});

cvcInput.addEventListener('keyup', (e) => {
  cvcCard.textContent = e.target.value;
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
})

function checkInputs() {
  const nameValue = nameCard.textContent;
  const cardNumber = numCard.textContent;
  const mmValue = monthCard.textContent;
  const yyValue = yearCard.textContent;
  const cvcValue = cvcCard.textContent;
}

const validationNameCard = /^[aA-zZ]+\s[Aa-zZ]+$/gm;
// /(?=(\D{4})+(?!\D))/, ' '