'use strict';

import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

let userData = {
  
  email: formRef.elements.email.value,
  message: formRef.elements.message.value
};

initPage();

const handleInput = event => {
  const { name, value } = event.target;

  userData[name] = value;

  const strData = JSON.stringify(userData);
  localStorage.setItem(LOCALSTORAGE_KEY, strData);
};

function initPage() {
  let savedData = localStorage.getItem(LOCALSTORAGE_KEY);

  if (savedData) {

    try {
  userData = JSON.parse(savedData);
    formRef.elements.email.value = userData.email;
    formRef.elements.message.value = userData.message;
} catch (error) {
  
}
      
  }
}

const handleSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return;
  }
  userData = {};
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    userData[name] = value;
  });
  console.log(userData);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();

};

const throttledHandleInput = throttle(handleInput, 500);

formRef.addEventListener('submit', handleSubmit);
formRef.addEventListener('input', throttledHandleInput);
