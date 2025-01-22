export function loadHero() {
  const hero = document.createElement('section');
  hero.classList.add('hero');

  hero.innerHTML = `
    <div class="hero-content">
      <div class="hero-text">
        <h3>Judith Barril Navarro</h3>
        <h1>#frontendDeveloper</h1>
      </div>
      <div class="profile-container">
      <span class="halo"></span>
      <span class="halo2"></span>
        <img src="./src/assets/profile.png" alt="Perfil de Judith">
      </div>
       <img src="./src/assets/scroll.svg" alt="Scroll Down" class="scroll-draw">
    </div>
  `;

  document.body.appendChild(hero);
}