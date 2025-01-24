import { judithContact } from "../../import";

export function loadContact() {
    const contactSection = document.createElement("section");
    contactSection.id = "contact";
    contactSection.classList.add("contact-section");
  
    contactSection.innerHTML = `
        <div class="contact">
            <h2 class="section-title">#contacto</h2>
            <div class="contact-card">
            <div class="contact-top">
                <div class="profile-info">
                <img
                    src="${judithContact}"
                    alt="Foto de Judith"
                    class="profile-photo"
                />
                <div>
                    <h3>Judith Barril Navarro</h3>
                    <p>Frontend Developer</p>
                </div>
                </div>
                <div class="social-links">
                <a href="http://linkedin.com/in/judithjbn" target="_blank">
                    <img src="src\assets\linkedin-draw-logo.png" alt="LinkedIn" />
                </a>
                <a href="http://instagram.com/sitetive" target="_blank">
                    <img src="./src/assets/instagram-draw-logo.png" alt="Instagram" />
                </a>
                </div>
            </div>
            <div class="contact-bottom">
                <div class="contact-item">
                <h4>Email</h4>
                <p>sitetive@gmail.com</p>
                </div>
                <div class="contact-item">
                <h4>Teléfono</h4>
                <p>+34 610 602 611</p>
                </div>
                <div class="contact-item">
                <h4>Ubicación</h4>
                <p>Barcelona, España</p>
                </div>
            </div>
            </div>
        </div>
        `;

    document.body.appendChild(contactSection);
  }