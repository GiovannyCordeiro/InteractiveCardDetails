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

class EventListennerNumber{
  constructor(elInput, elHTML){
    this.elInput = elInput;
    this.elHTML = elHTML;
  }
  changeDOMNumber(){
    this.elInput.addEventListener('keyup', (e) => {
      e.target.value = this.addCommas(e.target.value.replace(/\D/g, ''));
      this.elHTML.textContent = e.target.value;
    });
  }
  addCommas(value){
    return value.replace(/(?=(\d{4})+(?!\d))/g, ' ');
  }
}

const changeCardInput = new EventListennerNumber(inputNumber, numCard);
changeCardInput.changeDOMNumber();


class EventListennerName {
  constructor(elInput, elHTML){
    this.elInput = elInput;
    this.elHTML = elHTML;
  }

  changeDomName(){
    this.elInput.addEventListener('keyup', (e) => {
      e.target.value = e.target.value.replace(/\d/g, '');
      this.elHTML.textContent = e.target.value;
    })
  }
}

const changerNameInput = new EventListennerName(inputName,nameCard)
changerNameInput.changeDomName();

class EventListenerCVC{
  constructor(elInput, elHTML){
    this.elInput = elInput;
    this.elHTML = elHTML;
  }

  changeDomCVC(){
    this.elInput.addEventListener('keyup', (e) => {
      e.target.value = e.target.value.replace(/\D/, '');
      this.elHTML.textContent = e.target.value;
    })
  }
}

const changeCVCInput = new EventListenerCVC(cvcInput, cvcCard);
changeCVCInput.changeDomCVC();


class EventListenerChange{
  constructor(elInput, elHTML){
    this.elInput = elInput;
    this.elHTML = elHTML;
  }

  changeDOM(){
    this.elInput.addEventListener(`change`, (e) => {
      this.elHTML.textContent = e.target.value;
    })
  }
}

const changeMothInput = new EventListenerChange(mothInput,monthCard);
changeMothInput.changeDOM();

const changeYearInput = new EventListenerChange(yearInput, yearCard);
changeYearInput.changeDOM();


class CheckoutInputs{
  constructor(name, number, mm, yy, cvc, errorName, errorNumber, errorCVC, errorSelect, inputName, inputNumber, cvcInput,mmInput, yyInput){
    this.name = name.textContent;
    this.number = number.textContent;
    this.mm = mm.textContent;
    this.yy = yy.textContent;
    this.cvc = cvc.textContent;

    this.error = errorName;
    this.errorSelected = errorSelect;
    this.errorNumber = errorNumber;
    this.errorCVC = errorCVC;

    this.vldNameCard = /^[aA-zZ]+\s[Aa-zZ]+$/gm;
    this.vldNumber = /^\s\d{1,4}\s\d{1,4}\s\d{1,4}\s\d{1,4}$/gm;

    this.inputName = inputName;
    this.inputNumber = inputNumber;
    this.cvcInput = cvcInput;
    this.mmInput = mmInput;
    this.yyInput = yyInput;

  }

  conditionals(){
    let checked = false;

    if(this.vldNameCard.test(this.name)){
      this.inputName.classList.remove('error');
      this.error.style.display = 'none';
    }
    else{
      this.inputName.classList.add("error");
      this.error.style.display = "block";
    }

    if(this.vldNumber.test(this.number)){
      this.errorNumber.style.display = 'none';
      this.inputNumber.classList.remove('error');
    }
    else{
      this.errorNumber.style.display = 'block';
      this.inputNumber.classList.add('error');
    }

    if(this.cvc === '' || this.cvc.length < 3){
      this.cvcInput.classList.add("error");
      this.errorCVC.style.display = 'block';
    }
    else{
      this.cvcInput.classList.remove('error');
      this.errorCVC.style.display = 'none';
    }

    if(this.mm === "00" || mmValue === "MM"){
      this.mmInput.classList.add('error');
    }
    else{
      this.mmInput.classList.remove('error');
    }

    if(this.mmInput.className === 'error' || this.yyInput.className === 'error'){
      this.errorSelected.style.display = 'block';
    }
    else{
      this.errorSelected.style.display = 'none';
    }

    if(this.yy === '00' || this.yy === 'YY'){
      this.yyInput.classList.add('error');
    }
    else{
      this.yyInput.classList.remove('error');
    }

    if(
      this.inputName.className === 'error' ||
      this.inputNumber.className === 'error'||
      this.cvcInput.className === 'error'||
      this.mmInput.className === 'error'||
      this.yyInput.className === 'error'
    ){
      checked = false
    }
    else{
      checked = true;
    }

    if(checked ===  true){
      formWrapper.style.display = 'none';
      completedForm.style.display = 'flex';
    }
  }

  App(){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.conditionals();
    });
    
    btnContinue.addEventListener('click', () => {
      formWrapper.style.display = '';
      completedForm.style.display = 'none';
      inputName.value = '';
      inputNumber.value = '';
      mothInput.value = 'MM';
      yearInput.value = 'YY';
      cvcInput.value = '';
    })
    
  }
}

const checkoutForm = new CheckoutInputs(
  nameCard, 
  numCard, 
  monthCard, 
  yearCard, 
  cvcInput, 
  errorName, 
  errorNumber,
  errorCVC,
  errorSelect,
  inputName,
  inputNumber,
  cvcInput,
  mothInput,
  yearInput)

  checkoutForm.conditionals();

  checkoutForm.App()


/* function checkInputs() {
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
} */

/* btnContinue.addEventListener('click', () => {
  formWrapper.style.display = '';
  completedForm.style.display = 'none';
  inputName.value = '';
  inputNumber.value = '';
  mothInput.value = 'MM';
  yearInput.value = 'YY';
  cvcInput.value = '';
}) */
