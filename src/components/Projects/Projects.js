import { createProjectPlanet } from "./ProjectPlanet.js";

import { coverChatBot,  coverPat, coverAlerion, coverIniatiativ, coverGsap } from "../../import.js";

export function loadProjects() {
  const projectsSection = document.createElement("section");
  projectsSection.id = "projects";
  projectsSection.classList.add("projects");

  projectsSection.innerHTML = `
    <h2 class="section-title">#proyectos</h2>
    <div class="filter-buttons">
      <button data-tech="Astro" class="filter-btn">Astro</button>
      <button data-tech="JS Vanilla" class="filter-btn">JS Vanilla</button>
      <button data-tech="React" class="filter-btn">React</button>
      <button data-tech="Node.js" class="filter-btn">Node.js</button>
      <button data-tech="GSAP" class="filter-btn">GSAP</button>
      <button data-tech="all" class="filter-btn">Todas</button>
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
      technologies: ["React", "Astro", "all"],
      image: coverPat,
      github: "#",
      live: "https://patrinktattoo.netlify.app/"
    },
    {
      id: 2,
      name: "Chatbot IA Gemini",
      description: "En proceso: Desarrollo de chatbot funcional con IA para implementarlo en Web.",
      technologies: ["JS Vanilla", "CSS", "all"],
      image: coverChatBot,
      github: "https://github.com/Judithjbn/ChatBot",
    },
    {
      id: 3,
      name: "Web App Alerion",
      description: "Diseño y maquetación (React) de dashboard para la empresa Alerion Tech.<br> <em style='font-size: 0.8rem;'>Por razones de confidencialidad, no se puede mostrar el enlace al repositorio.</em>",
      technologies: ["React", "Material UI", "CSS", "Node.js", "all"],
      image: coverAlerion,
    },
    {
      id: 4,
      name: "Iniatiativ",
      description: "Soporte en la maquetación con CSS, JS y Elementor.",
      technologies: ["CSS", "JS Vanilla", "WordPress", "all"],
      image: coverIniatiativ,
      live: "https://asiico.org/",
    },
    {
      id: 5,
      name: "Demo Gsap",
      description: "Diseño y maquetación sencilla como muestra de conocimientos en la libreria GSAP.",
      technologies: ["CSS", "GSAP", "all"], 
      image: coverGsap,
      live: "https://gsap-sitetive.netlify.app/",
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
