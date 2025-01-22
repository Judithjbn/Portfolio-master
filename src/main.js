import './style.css';

import { starsBG } from './components/Stars/Stars.js';	
import { loadHeader } from './components/Header/Header.js';
import { loadHero } from './components/Hero/Hero.js';
import { loadExperiencie } from './components/Experiencie/Experiencie.js';
import { loadProjects } from './components/Projects/Projects.js';
import { loadContact } from './components/Contact/Contact.js';
import { loadFooter } from './components/Footer/Footer.js';

import './components/Stars/Stars.css';
import './components/Header/Header.css';
import './components/Hero/Hero.css';
import './components/Menu/Menu.css';
import './components/Experiencie/Experiencie.css';
import './components/Projects/Projects.css';
import './components/Contact/Contact.css';
import './components/Footer/Footer.css';

document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadHero();
  loadExperiencie();
  loadProjects();
  loadContact();
  loadFooter();
  starsBG();
});