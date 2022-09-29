'use strict';

import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';


let userData = {
  
  email: formRef.elements.email.value,
  message: formRef.elements.message.value
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


initPage();

const handleInput = event => {
  const { name, value } = event.target;
    
  userData[name] = value;

  const strData = JSON.stringify(userData);
  localStorage.setItem(LOCALSTORAGE_KEY, strData);
  console.log("strData", strData);
};


const handleSubmit = event => {
  event.preventDefault();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  const {
    elements: { email, message },
  } = event.currentTarget;
 

  if (email.value === '' || message.value === '') {
    alert('Fill all the fields!');
    return;
  }

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    userData[name] = value;
  });
  console.log(userData);
  event.currentTarget.reset();
  userData = { email: "", message: ""};

};

const throttledHandleInput = throttle(handleInput, 500);
formRef.addEventListener('input', throttledHandleInput);
formRef.addEventListener('submit', handleSubmit);




// 'use strict';
// import throttle from 'lodash.throttle';

// const formRef = document.querySelector('.feedback-form');
// const LOCALSTORAGE_KEY = 'feedback-form-state';

// let userData = {
  
//   email: formRef.elements.email.value,
//   message: formRef.elements.message.value,
// };

// let savedData = localStorage.getItem(LOCALSTORAGE_KEY);

//   if (savedData) {
//     userData = JSON.parse(savedData);
//     formRef.elements.email.value = userData.email;
//     formRef.elements.message.value = userData.message;
    
//   }

// let strData = {};

// formRef.addEventListener('input', throttle(event => {
  
//   const { name, value } = event.target;
//   userData[name] = value;
//   strData = JSON.stringify(userData);
//   localStorage.setItem(LOCALSTORAGE_KEY, strData);
  
// }, 500) );
  
  
// formRef.addEventListener('submit', event => {
//   event.preventDefault();
//   const {
//     elements: { email, message },
//   } = event.currentTarget;

//   if (email.value === '' || message.value === '') {
//     alert('Заповніть всі поля!');
//     return;
//   }
//   console.log(userData);
//   localStorage.removeItem(LOCALSTORAGE_KEY);
//   event.currentTarget.reset();
//   userData = {email: "", message: ""};

// });

