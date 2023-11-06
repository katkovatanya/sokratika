import { dropDownList, dropDownButton, hiddenInput, dropDownListItems, secondLabel } from "../utils/constants";

function toggleVisibleDropDownList() {
  dropDownList.classList.toggle('form__drop-down-list_visible');
}

export function handleClickDropDownButton(evt) {
  evt.preventDefault();
  toggleVisibleDropDownList();
  secondLabel.classList.add('form__label_blue');
}

export function handleClickDropDownItem(e) {
  e.stopPropagation();
  dropDownButton.innerText = this.innerText;
  toggleVisibleDropDownList();
  dropDownListItems.forEach(item => item.classList.remove('form__drop-down-list-item_active'));
  secondLabel.classList.remove('form__label_blue');
  this.classList.add('form__drop-down-list-item_active');
  hiddenInput.value = this.dataset.value;
}