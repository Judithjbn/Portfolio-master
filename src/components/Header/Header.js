export function loadHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  header.innerHTML = `
    <div class="menu-btn">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <img src="./src/assets/logo.png" alt="Logo" class="logo" id="logo">
  `;

  document.body.prepend(header);
}