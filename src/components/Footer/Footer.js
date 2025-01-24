import { logoGithub } from "../../import";

export function loadFooter() {
    const footerSection = document.createElement("section");
    footerSection.id = "footer";
    footerSection.classList.add("footer-section");

  footerSection.innerHTML = `
    <div class="footer-content">
     <p>© 1995 - Judith Barril Navarro</p>
     <a href="https://github.com/Judithjbn" target="_blank">
        <img 
            class="footer-icon" 
            src="${logoGithub}"
            alt="Github Icon"
            width="60">
        </>
    </div>
    `;

    document.body.appendChild(footerSection);
}