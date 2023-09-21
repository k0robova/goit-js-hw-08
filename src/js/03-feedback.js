import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(updateLocalStorage, 500));
form.addEventListener('submit', handleSubmit);

populateFormFields();

function updateLocalStorage() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormFields() {
  const storedFormData = localStorage.getItem(STORAGE_KEY);

  if (storedFormData) {
    const formData = JSON.parse(storedFormData);

    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);

  const emailValue = emailInput.value;
  const messageValue = messageInput.value;

  const formObject = {
    email: emailValue,
    message: messageValue,
  };
  console.log(formObject);

  emailInput.value = '';
  messageInput.value = '';
}
