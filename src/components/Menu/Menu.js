export function loadMenu() {
    const nav = document.createElement('nav');
    nav.classList.add('menu');
  
    nav.innerHTML = `
      <ul>
        <li data-section="experiencia">Experiencia</li>
        <li data-section="portfolio">Portfolio</li>
        <li data-section="contacto">Contacto</li>
      </ul>
    `;
  
    document.body.prepend(nav);
  
    const menuItems = nav.querySelectorAll('li');
    menuItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.classList.add('active');
      });
  
      item.addEventListener('mouseout', () => {
        item.classList.remove('active');
      });
  
      item.addEventListener('click', () => {
        alert(`Sección seleccionada: ${item.dataset.section}`);
      });
    });
  }