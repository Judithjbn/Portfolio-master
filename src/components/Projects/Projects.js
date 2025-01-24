import { createProjectPlanet } from "./ProjectPlanet.js";

import { coverChatBot,  coverPat } from "../../import";

export function loadProjects() {
  const projectsSection = document.createElement("section");
  projectsSection.id = "projects";
  projectsSection.classList.add("projects");

  projectsSection.innerHTML = `
    <h2 class="section-title">#proyectos</h2>
    <div class="filter-buttons">
      <button data-tech="React" class="filter-btn">React</button>
      <button data-tech="TypeScript" class="filter-btn">TypeScript</button>
      <button data-tech="Node.js" class="filter-btn">Node.js</button>
    </div>
    <div class="projects-grid" id="projects-grid"></div>
    <div id="project-popup" class="popup hidden"></div>
  `;

  document.body.appendChild(projectsSection);

  const projects = [
    {
      id: 1,
      name: "Web Coorporativa Tattoo",
      description: "Diseño y desarrollo web para Patri Ink Tattoo",
      technologies: ["React", "Astro"],
      image: coverPat,
      github: "#",
      live: "https://patrinktattoo.netlify.app/"
    },
    {
      id: 2,
      name: "Chatbot IA Gemini",
      description: "Desarrollo de chatbot funcional con IA para implementarlo en Web.",
      technologies: ["React", "CSS", "Node.js"],
      //imagen importada chatbot
      image: coverChatBot,
      github: "#",
      live: "#",
    }
  ];

  const projectsGrid = document.getElementById("projects-grid");

  projects.forEach(project => {
    const planet = createProjectPlanet(project);
    projectsGrid.appendChild(planet);
  });

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const tech = button.dataset.tech;

      document.querySelectorAll(".planet").forEach(planet => {
        const techs = planet.dataset.tech.split(",");
        if (techs.includes(tech)) {
          planet.classList.remove("hidden");
        } else {
          planet.classList.add("hidden");
        }
      });
    });
  });
}
