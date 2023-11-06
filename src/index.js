import './pages/index.css';
import { handleClickDropDownButton, handleClickDropDownItem } from './components/drop-down-list';
import { dropDownButton, dropDownListItems, dropDownList, arrayOfTopics, addButton, inputDeleteButton, inputTopic, secondLabel } from './utils/constants';
import { handleClickTopic, addTopic, handleClickDeleteButton, handleInputChange, handleInputClick, inputInactive } from './components/input';


dropDownButton.addEventListener('click', handleClickDropDownButton);

dropDownListItems.forEach(item => {
  item.addEventListener('click', handleClickDropDownItem)
})

//закрытие кастомного выпадающего списка при клике вне списка
document.addEventListener('click', function (e) {
  if (e.target !== dropDownButton && e.target !== dropDownList) {
    dropDownList.classList.remove('form__drop-down-list_visible');
    secondLabel.classList.remove('form__label_blue');
  }
})

//закрытие кастомного выпадающего списка по нажатию на клавиши Esc и Tab
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.key === 'Tab')
    dropDownList.classList.remove('form__drop-down-list_visible');
})

arrayOfTopics.forEach(item => {
  item.addEventListener('click', handleClickTopic)
})

addButton.addEventListener('click', addTopic)

inputDeleteButton.addEventListener('click', handleClickDeleteButton);

inputTopic.addEventListener('input', handleInputChange);

inputTopic.addEventListener('click', handleInputClick);

document.addEventListener('click', function (e) {
  if (e.target !== inputTopic) {
    inputInactive()
  }
})

