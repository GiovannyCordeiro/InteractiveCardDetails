// element dom
const numCard = document.querySelector('#card-num');
const nameCard = document.querySelector('#name-card');
const mothInput = document.querySelector('#mothInput');
const monthCard = document.querySelector('#moth');
const yearInput = document.querySelector('#yearInput');
const yearCard = document.querySelector('#year');
const cvcInput = document.querySelector('#cvcInput');
const cvcCard = document.querySelector('#cvcCard');
const form = document.querySelector('#form');
const button = document.querySelector('#confirm');
const inputName = document.querySelector('#input-name');
const inputNumber = document.querySelector('#input-number');
const errorName = document.querySelector('#errorNameInput');
const errorNumber = document.querySelector('#errorNumber');
const errorSelect = document.querySelector('#errorSelect');
const errorCVC = document.querySelector('#error-cvc');

const completedForm = document.querySelector('.completed-form');
const formWrapper = document.querySelector('#formWrapper');
const btnContinue = document.getElementById('btnContinue');

btnContinue.addEventListener('click', () => {
  formWrapper.style.display = '';
  completedForm.style.display = 'none';
  inputName.value = '';
  inputNumber.value = '';
  mothInput.value = 'MM';
  yearInput.value = 'YY';
  cvcInput.value = '';
})

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

const changeCVC = (e) => {
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
  const cvcValue = cvcInput.value;

  const vldNameCard = /^[aA-zZ]+\s[Aa-zZ]+$/gm;
  const vldNumber = /^\s\d{1,4}\s\d{1,4}\s\d{1,4}\s\d{1,4}$/gm;

  let checked = false;

  if(vldNameCard.test(nameValue)){
    inputName.classList.remove('error');
    errorName.style.display = 'none';
  }
  else{
    inputName.classList.add('error');
    errorName.style.display = 'block'
  }

  if(vldNumber.test(cardNumber)){
    errorNumber.style.display = 'none';
    inputNumber.classList.remove('error');
  }
  else{
    errorNumber.style.display = 'block';
    inputNumber.classList.add('error');
  }

  if(cvcValue === '' || cvcValue.length < 3){
    cvcInput.classList.add('error');
    errorCVC.style.display = 'block'
  }
  else{
    cvcInput.classList.remove('error');
    errorCVC.style.display = 'none'
  }

  if(mmValue === '00' || mmValue === 'MM'){
    mothInput.classList.add('error');
  }
  else{
    mothInput.classList.remove('error');
  }

  if(yyValue === '00' || yyValue === 'YY'){
    yearInput.classList.add('error');
  }
  else{
    yearInput.classList.remove('error');
  }
  

  if(mothInput.className === 'error' || yearInput.className === 'error'){
    errorSelect.style.display = 'block'
  }
  else{
    errorSelect.style.display = 'none';
  }

  if(
    inputName.className === 'error' || 
    inputNumber.className === 'error' || 
    cvcInput.className === 'error' || 
    mothInput.className === 'error' || 
    yearInput.className === 'error'){
    checked = false
  }
  else{
    checked = true;
  }

  if(checked === true){
    formWrapper.style.display = 'none';
    completedForm.style.display = 'flex';
  }
}