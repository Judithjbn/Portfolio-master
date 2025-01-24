import { logo } from "../../import";

export function loadHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  header.innerHTML = `
    <div class="menu-btn">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <img src="${logo}" alt="Logo" class="logo" id="logo">
  `;

  document.body.prepend(header);
}