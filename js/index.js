const formBtn = document.querySelector('.search-button');
const formContainer = document.querySelector('.form-container');
const numInputs = document.querySelectorAll('.js-num');
const searchForm = document.querySelector('.form-container form');
const formInputs = document.querySelectorAll('.form-container input');
const numInputsRegEx = /[^\d]/g;

const validateForm = (inputs) => {
  let flag = true;
  inputs.forEach((el) => {
    if(!el.value) {
      flag = false;
    }
  })
  return flag;
};

if (formContainer) {
  formContainer.classList.remove('active');
  formBtn.addEventListener('click', () => {
    formContainer.classList.toggle('active');
  });
  searchForm.addEventListener('submit', (e) => {
    if (!validateForm(formInputs)) {
      e.preventDefault();
      formContainer.classList.add('has-error');
      setTimeout(() => {
        formContainer.classList.remove('has-error');
      }, 600)
    } else {
      formContainer.classList.remove('has-error');
    }
  });
};

if (numInputs.length) {
  numInputs.forEach((el) => {
    el.addEventListener('input', () => {
      el.value = el.value.replace(numInputsRegEx, '');
    });
  });
};
