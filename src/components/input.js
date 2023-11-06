import { inputTopic, topics, topicsContainer, inputDeleteButton, arrayOfLabel, firstLabel } from "../utils/constants";

let index = 0;

export function handleClickTopic() {
  inputTopic.value = this.textContent;
  inputDeleteButton.classList.add('form__input-delete-button_visible');
}

export function addTopic(e) {
  e.preventDefault();
  for (let i = 0; i < 9; i++) {
    const li = document.createElement("li");
    li.textContent = topics[index];
    topicsContainer.appendChild(li);
    li.classList.add('topic');
    li.addEventListener('click', handleClickTopic);
    index = (index + 1) % topics.length;
  }
}

export function handleClickDeleteButton(e) {
  e.preventDefault();
  inputTopic.value = '';
  inputDeleteButton.classList.remove('form__input-delete-button_visible');
}

export function handleInputChange() {
  if (inputTopic.value.length > 0) {
    inputDeleteButton.classList.add('form__input-delete-button_visible');
  }
  if (inputTopic.value.length == 0) {
    inputDeleteButton.classList.remove('form__input-delete-button_visible');
  }
}

export function handleInputClick() {
  firstLabel.classList.add('form__label_blue');
}

export function inputInactive() {
  firstLabel.classList.remove('form__label_blue');
}