let userData = {
  name: '',
  number: '',
  month: '', 
  year: '',
  cvv: '',
}

const cardName = {
  input: document.querySelector('#name'),
  error: document.querySelector('.name-error'),
}
const number = document.querySelector('#number');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const cvv = document.querySelector('#cvv');

const form = document.querySelector('form');
const validRegexName = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// const validRegexName = /^[a-z ,.'-]+$/i
// const validRegexName = /^[a-z ,.'-]+$/i
// const validRegexName = /^[a-z ,.'-]+$/i
// const validRegexName = /^[a-z ,.'-]+$/i

form.addEventListener('submit', (e) => {
  e.preventDefault();
  userData.name = e.target[0].value;
  userData.number = e.target[1].value;
  userData.month = e.target[2].value;
  userData.year = e.target[3].value;
  userData.cvv = e.target[4].value;
  // form.reset(); 
})

cardName.input.addEventListener('change', () => {
  validation('#name', '.name-error', validRegexName, 'Wrong name format');
})

const validation = (input, label, validRegex, error) => {
  const tag = document.querySelector(input);
  const message = document.querySelector(label);
  if(tag.value === ""){
    message.innerHTML = "Can't be blank";
  }
  else if(tag.value.match(validRegex) == true){
    message.innerHTML = error;
  }else{
    message.innerHTML = "";
  }
}
