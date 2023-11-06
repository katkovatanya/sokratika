import { textareaCounter } from "../utils/constants";

export function handleTextareaChange() {
  const count = this.value.length;
  textareaCounter.textContent = `${count} / 200`;
}