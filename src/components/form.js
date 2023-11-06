import { textareaCounter } from "../utils/constants";
export function handleSubmitForm(e) {
  e.preventDefault();
  const form = e.currentTarget;
  console.log(input);
  const isValid = form.checkValidity();
  if (isValid) {
    form.reset();
  }
}


export function handleInputForm(e) {
  const input = e.target;
  const form = e.currentTarget;
  setCustomError(input);
  setFieldError(input);
  setSubmitButtonState(form);
  const isValid = form.checkValidity();
  if (isValid) {
    input.classList.remove('form__textarea_invalid');
    input.previousElementSibling.classList.remove('form__label_red');
    textareaCounter.classList.remove('form__textarea-count_red');
  }
}

function setCustomError(input) {
  const validity = input.validity;
  input.setCustomValidity('');

  if (validity.tooShort || validity.tooLong) {
    input.setCustomValidity('Enter your name')
  }
}

function setFieldError(input) {
  const span = input.nextElementSibling;
  span.textContent = input.validationMessage;
  input.classList.add('form__textarea_invalid');
  input.previousElementSibling.classList.add('form__label_red');
  textareaCounter.classList.add('form__textarea-count_red');
}

function setSubmitButtonState(form) {
  const button = form.querySelector('.next-button');
  const isValid = form.checkValidity();

  if(isValid) {
    button.removeAttribute("disabled");
    button.classList.remove('next-button_disabled');
  }
  else {
    button.setAttribute("disabled", true);
    button.classList.add('next-button_disabled');
  }
}