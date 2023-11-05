import { inputTopic, topics, topicsContainer } from "../utils/constants";

let index = 0;

export function handleClickTopic() {
  inputTopic.value = this.textContent;
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