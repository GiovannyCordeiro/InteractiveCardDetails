const form = document.querySelector('#form');

const monthCard = document.querySelector('#moth');
const numCard = document.querySelector('#card-num');
const yearCard = document.querySelector('#year');
const nameCard = document.querySelector('#name-card');
const cvcCard = document.querySelector('#cvcCard');

const mothInput = document.querySelector('#mothInput');
const yearInput = document.querySelector('#yearInput');
const cvcInput = document.querySelector('#cvcInput');
const nameInput = document.querySelector('#input-name');
const numInput = document.querySelector('#input-number');

const errorName = document.querySelector('#errorNameInput');
const errorNumber = document.querySelector('#errorNumber');
const errorSelect = document.querySelector('#errorSelect');
const errorCVC = document.querySelector('#error-cvc');

const completedForm = document.querySelector('.completed-form');
const formWrapper = document.querySelector('#formWrapper');
const btnContinue = document.getElementById('btnContinue');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
})

nameInput.addEventListener("keyup", e => {
  e.target.value = e.target.value.replace(/\d/gi, '');
  nameCard.textContent = e.target.value;
})

numInput.addEventListener("keyup", e => {
  e.target.value = refactoringNum(e.target.value.replace(/\D/g, ''));
  numCard.textContent = e.target.value;
})

function refactoringNum(value) {
  return value.replace(/(?=(\d{4})+(?!\d))/g, ' ');
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

function checkInputs() {
  const vldNameCard = /^[A-z]+\s[A-z]+$/gmi;
  const vldNumber = /^\s\d{1,4}\s\d{1,4}\s\d{1,4}\s\d{1,4}$/gm;

  let formClompleted = false;

  if(vldNameCard.test(nameInput.value)){
    nameInput.classList.remove('error');
    errorName.style.display = 'none';
  }
  else{
    nameInput.classList.add('error');
    errorName.style.display = 'block'
  }

  if(vldNumber.test(numInput.value)){
    errorNumber.style.display = 'none';
    numInput.classList.remove('error');
  }
  else{
    errorNumber.style.display = 'block';
    numInput.classList.add('error');
  }

  if(cvcInput.value === '' || cvcInput.value.length < 3){
    cvcInput.classList.add('error');
    errorCVC.style.display = 'block'
  }
  else{
    cvcInput.classList.remove('error');
    errorCVC.style.display = 'none'
  }

  if(mothInput.value === '00' || mothInput.value === 'MM'){
    mothInput.classList.add('error');
  }
  else{
    mothInput.classList.remove('error');
  }

  if(yearInput.value === '00' || yearInput.value === 'YY'){
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
    nameInput.className === 'error' || 
    numInput.className === 'error' || 
    cvcInput.className === 'error' || 
    mothInput.className === 'error' || 
    yearInput.className === 'error'){
    formClompleted = false
  }
  else{
    formClompleted = true;
  }

  if(formClompleted === true){
    formWrapper.style.display = 'none';
    completedForm.style.display = 'flex';
  }
}

btnContinue.addEventListener('click', () => {
  formWrapper.style.display = '';
  completedForm.style.display = 'none';
  nameInput.value = '';
  numInput.value = '';
  mothInput.value = 'MM';
  yearInput.value = 'YY';
  cvcInput.value = '';
})