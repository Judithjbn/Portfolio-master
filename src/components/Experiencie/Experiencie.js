import { createExperienceCard } from "./ExperienceCard.js";

export function loadExperiencie() {
  const experiencieSection = document.createElement("section");
  experiencieSection.id = "experiencie";
  experiencieSection.classList.add("experiencie");

  experiencieSection.innerHTML = `
    <h2 class="section-title">#curriculum</h2>
    <div class="toggle-buttons">
      <button id="btn-experience" class="active">Experiencia</button>
      <button id="btn-education">Educación</button>
    </div>
    <div class="experiencie-content">
      <div id="experience-content" class="experiencie-grid">
      </div>
      <div id="education-content" class="experiencie-grid hidden">
        <div class="experiencie-card">
          <h3>Educación</h3>
          <h4>Máster en Desarrollo FullStack</h4>
          <p class="date">2024 - Actualidad</p>
          <p>thePower</p>
          <h4>Ciclo Formativo Grado Superior</h4>
          <p class="date">2019 - 2020</p>
          <p>ASEDEM - FORMACIÓN SUBVENCIONADA</p>
        </div>
         <div class="experiencie-card skills-card">
          <h3 style="text-align:center;">Skills</h3>
          <div class="skills">
            <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML5 / CSS3</li>
            <li>Astro</li>
          </ul>
          <ul>
            <li>Figma</li>
            <li>Affinity Designer</li>
            <li>Procreate</li>
          </ul>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(experiencieSection);

  const experiences = [
    {
      company: "Frontend Developer | Diseñadora Web",
      role: "Freelancer",
      date: "2019 - Actualidad",
      tasks: [
        "Actualmente trabajando en el desarrollo de una Aplicación Web para un centro de deportivo <strong>(React, Firebase)</strong>.",
        "Desarrollo frontend de webs básicas (WordPress) y aplicaciones avanzadas <strong>(SASS, React, Astro...)</strong>.",
        "Diseño de webs coorporativas y aplicaciones web avanzadas. Test de usuario, estudio y mejora de accesibilidad.",
        "Colaboración de proyectos, búsqueda y creación de recursos."
      ]
    },
    {
      company: "Fontend Developer | Diseñadora UI",
      role: "Kewomedia",
      date: "2022 - 2023",
      tasks: [
        "Desarrollo y rediseño de aplicación para Aleriontec en equipo (Bitbucket, Jira). Planificación del proyecto, mejora de estructura y funcionalidad <strong>(React, Node)</strong>.",
        "Desarrollo webs coorporativas",
        "Maquetación web y mejora de funcionalidades (JS, PHP).",
        "Estudio UX y diseño UI.",
      ]
    },
  ];
  const experienceContent = document.getElementById("experience-content");
  experiences.forEach(exp => {
    const card = createExperienceCard(exp.company, exp.role, exp.date, exp.tasks);
    experienceContent.appendChild(card);
  });

  const btnEducation = document.getElementById("btn-education");
  const btnExperience = document.getElementById("btn-experience");
  const educationContent = document.getElementById("education-content");

  btnExperience.addEventListener("click", () => {
    experienceContent.classList.remove("hidden");
    educationContent.classList.add("hidden");
    btnExperience.classList.add("active");
    btnEducation.classList.remove("active");
  });

  btnEducation.addEventListener("click", () => {
    educationContent.classList.remove("hidden");
    experienceContent.classList.add("hidden");
    btnEducation.classList.add("active");
    btnExperience.classList.remove("active");
  });
}