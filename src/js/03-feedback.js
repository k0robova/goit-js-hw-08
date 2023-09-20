const form = document.querySelector('.feedback-form');
form.addEventListener('input', onInputForm);

function onInputForm(event) {
  event.preventDefault();

  // Отримуємо всі поля форми за їх іменами
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  // Отримуємо поточні значення полів
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;

  if (emailValue.trim() !== '' && messageValue.trim() !== '') {
    const formData = {
      email: emailValue,
      message: messageValue,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
}

// Під час завантаження сторінки перевіряємо стан сховища
window.addEventListener('load', function () {
  // Отримуємо дані із локального сховища
  const storedFormData = localStorage.getItem('feedback-form-state');

  // Перевіряємо, чи є збережені дані у сховищі
  if (storedFormData) {
    // Розпаковуємо дані зі сховища
    const formData = JSON.parse(storedFormData);

    // Отримуємо всі поля форми за їх іменами
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    // Заповнюємо поля форми зі збереженими даними
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});

// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
const btnSubmit = document.querySelector('button');
btnSubmit.addEventListener('submit', onBtnSubmit);
function onBtnSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
}

// const formEl = document.querySelector('.login-form');
// formEl.addEventListener('submit', onSubmit);

// function onSubmit(event) {
//   event.preventDefault();

//   const { email, password } = event.currentTarget.elements;

//   if (email.value === '' || password.value === '') {
//     alert('Всі поля повинні бути заповнені!');
//   } else {
//     console.log(email.value);
//     console.log(password.value);
//   }

//   const data = {
//     userEmail: email.value,
//     userPassword: password.value,
//   };
//   console.log(data);
//   event.currentTarget.reset();
// }
