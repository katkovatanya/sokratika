import './pages/index.css';
import { handleClickDropDownButton, handleClickDropDownItem } from './components/drop-down-list';
import { dropDownButton, dropDownListItems, dropDownList } from './utils/constants';


dropDownButton.addEventListener('click', handleClickDropDownButton);

dropDownListItems.forEach(item => {
  item.addEventListener('click', handleClickDropDownItem)
})

//закрытие кастомного выпадающего списка при клике вне списка
document.addEventListener('click', function (e) {
  if (e.target !== dropDownButton && e.target !== dropDownList)
    dropDownList.classList.remove('form__drop-down-list_visible');
})

//закрытие кастомного выпадающего списка по нажатию на клавиши Esc и Tab
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.key === 'Tab')
    dropDownList.classList.remove('form__drop-down-list_visible');
})