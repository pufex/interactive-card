let userData = {
  name: '',
  number: '',
  month: '', 
  year: '',
  cvv: '',
}

const cardName = document.querySelector('#name');
  const number = document.querySelector('#number');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const cvv = document.querySelector('#cvv');

const form = document.querySelector('form');

const nameCard = document.querySelector('.card-name');
const numberCard = document.querySelector('.card-number');
const monthCard = document.querySelector('.card-month');
const yearCard = document.querySelector('.card-year');
const cvvCard = document.querySelector('.card-cvv');
const doneMessage = document.querySelector('.done-message');

const continueReturn = document.querySelector('#continue');

const validRegexName = /^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
const validRegexNumber = /^(?:\d{4} ){3}\d{4}$/
const validRegexMonth = /^(0[1-9]|1[0-2])$/
const validRegexYear = /^[2-9][4-9]$/
const validRegexCvv = /^[0-9]{3}$/

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(!validation('#name', '.name-error', validRegexName, 'Wrong name format') || !validation('#number', '.card-error', validRegexNumber, 'Should start with 4 with 16 digits separated') || !validation('#year', '.date-error', validRegexYear, 'Invalid year/month') || !validation('#month', '.date-error', validRegexMonth, 'Invalid year/month') || !validation('#cvv', '.cvv-error', validRegexCvv, 'Invalid cvv')){
    return;
  }
  userData.name = e.target[0].value;
  userData.number = e.target[1].value;
  userData.month = e.target[2].value;
  userData.year = e.target[3].value;
  userData.cvv = e.target[4].value;

  nameCard.innerHTML = userData.name;
  numberCard.innerHTML = userData.number;
  monthCard.innerHTML = userData.month;
  yearCard.innerHTML = userData.year;
  cvvCard.innerHTML = userData.cvv;

  form.classList.add('hidden');
  doneMessage.classList.remove('hidden');

  form.reset();
})

continueReturn.addEventListener('click', () => {
  form.classList.remove('hidden');
  doneMessage.classList.add('hidden');

  nameCard.innerHTML = "FELICIA LEIRE";
  numberCard.innerHTML = "0000 0000 0000 0000";
  monthCard.innerHTML = "00";
  yearCard.innerHTML = "00";
  cvvCard.innerHTML = "000";
})

cardName.addEventListener('change', () => {
  validation('#name', '.name-error', validRegexName, 'Wrong name format');
})
number.addEventListener('change', () => {
  // cardify();
  validation('#number', '.card-error', validRegexNumber, 'Should start with 4 with 16 digits separated');
})
year.addEventListener('change', () => {
  validation('#year', '.date-error', validRegexYear, 'Invalid year/month');
})
month.addEventListener('change', () => {
  validation('#month', '.date-error', validRegexMonth, 'Invalid year/month');
})
cvv.addEventListener('change', () => {
  validation('#cvv', '.cvv-error', validRegexCvv, 'Invalid cvv');
})


const validation = (input, label, validRegex, error) => {
  const tag = document.querySelector(input);
  const message = document.querySelector(label);
  if(tag.value === ""){
    message.innerHTML = "Can't be blank";
    return false;
  }
  if(!tag.value.match(validRegex)){
    message.innerHTML = error;
    return false;
  }else{
    message.innerHTML = "";
  }
  return true;
}

let b = "4444444444444444"

// const cardify = (string) =>{
//   let array = string.split('');
//   if(array.length = 19){
//     array.splice(1, 0, '');
//     array.splice(5, 0, '');
//     array.splice(9, 0, '');
//   }else{
//     array.splice(1, 0, ' ');
//     array.splice(5, 0, ' ');
//     array.splice(9, 0, ' ');
//   }
//   array.join('');
//   return array;
// }
