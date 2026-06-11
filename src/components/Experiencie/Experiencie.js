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
          <h4>Fundamentos de la gestión de proyectos, PM</h4>
          <p class="date">2026</p>
          <p>Google Career Certificates</p>
          <h4>Máster en Desarrollo FullStack</h4>
          <p class="date">2024 - 2026</p>
          <p>thePower</p>
          <h4>Ciclo Formativo Grado Superior</h4>
          <p class="date">2019 - 2020</p>
          <p>ASEDEM - FORMACIÓN SUBVENCIONADA</p>
        </div>
         <div class="experiencie-card skills-card">
          <h3 style="text-align:center;">Skills</h3>
          <div class="skills">
            <ul>
            <li>Angular</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>Astro</li>
            <li>Typescript</li>
          </ul>
          <ul>
            <li>HTML5 / CSS3</li>
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
      company:"Frontend Developer (Angular)",
      role:"Vueling",
      date:"abr. 2026 - jun. 2026",
      tasks: [
        "Desarrollo de aplicaciones <strong>SPA</strong> con Angular, trabajando tanto con arquitecturas tradicionales basadas en <strong>módulos y BehaviorSubject</strong>, como con las nuevas versiones de <strong>Angular (v17+) orientadas a standalone components y signals.</strong>",
        "Programación reactiva con <strong>RxJS</strong> y gestión de flujos asíncronos mediante observables. ",
        "Desarrollo y organización de <strong>componentes, servicios, guards, providers, models y routing</strong> siguiendo buenas prácticas de arquitectura.",
        "Aplicación de principios <strong>SOLID</strong>, separación de responsabilidades y componentización escalable.",
        "Integración y consumo de <strong>APIs</strong>",
        "<strong>Testing</strong> y fundamentos de <strong>QA</strong>",
        "Refuerzo de fundamentos de <strong>Typescript</strong>",
        "Participación en la mejora y adaptación de componentes y estilos dentro de un Design System interno basado en Angular Material.",
        "Formación en ALM (Agile Lifecycle Management), flujos de despliegue, pipelines y estrategias y organización de ramas en Git. <strong>(Azure DevOps)</strong>"
      ]
    }, 
    {
      company: "IT Consultant | Software Developer",
      role: "Iterem",
      date: "2025",
      tasks: [
        "Desarrollo y mantenimiento de aplicaciones: producción de código limpio y eficiente, resolución de errores, actualización de software.<strong>(JavaScript, C#, .NET, etc.)</strong>",
        "Análisis y desarrollo de mejoras o cambios en aplicaciones existentes.",
        "Documentación técnica y de tareas realizadas. <strong>(Jira, Confluence)</strong>",
        "Participación en la configuración, ajustes, actualizaciones y migraciones tecnológicas.",
        "Verificación, despliegue y pruebas de software.<strong>(Git, Azure DevOps)</strong>",
        "Participación en reuniones técnicas y de seguimiento con clientes.",
        "Participación activa en equipos multidisciplinares, ayudando a miembros junior.",
        "Aplicación de metodología propia de iterem y aportación de mejoras internas. <strong>(Enfoque ágil, reuniones stand-up, planificación iterativa...)</strong>"
      ]
    },
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