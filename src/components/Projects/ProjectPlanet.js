export function createProjectPlanet(project) {
    const planet = document.createElement("div");
    planet.classList.add("planet");
    planet.dataset.tech = project.technologies.join(",");
  
    planet.innerHTML = `
      <div class="planet-circle">
        <h3 class="planet-name">${project.name}</h3>
        <div class="tech-tags">
          ${project.technologies.map(tech => `<span>${tech}</span>`).join("")}
        </div>
      </div>
    `;
  
    planet.addEventListener("click", () => {
      showPopup(project);
    });
  
    return planet;
  }
  
  function showPopup(project) {
    const popup = document.getElementById("project-popup");
    popup.innerHTML = `
      <div class="popup-content">
        <button id="close-popup">✕</button>
        <h3>${project.name}</h3>
        <img src="${project.src.image}" alt="${project.name}">
        <p>${project.description}</p>
        <div class="tech-tags">
          ${project.technologies.map(tech => `<span>${tech}</span>`).join("")}
        </div>
        <div class="popup-links">
          ${project.github ? `<a href="${project.github}" target="_blank">GitHub</a>` : ""}
          ${project.live ? `<a href="${project.live}" target="_blank">Live Demo</a>` : ""}
        </div>
      </div>
    `;
    popup.classList.remove("hidden");
  
    document.getElementById("close-popup").addEventListener("click", () => {
      popup.classList.add("hidden");
    });
  }