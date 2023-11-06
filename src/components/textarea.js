import { textareaCounter } from "../utils/constants";

export function handleTextareaChange() {
  const count = this.value.length;
  textareaCounter.textContent = `${count} / 200`;
  setSubmitButtonState()
}

function setSubmitButtonState() {
  const form = document.querySelector('.form');
  const button = form.querySelector('.next-button');
  const isValid = form.checkValidity();

  if (isValid) {
    button.removeAttribute("disabled");
    button.classList.remove('next-button_disabled');
  }
  else {
    button.setAttribute("disabled", true);
    button.classList.add('next-button_disabled');
  }
}