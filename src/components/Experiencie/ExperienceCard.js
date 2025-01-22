export function createExperienceCard(company, role, date, tasks) {
    const card = document.createElement("div");
    card.classList.add("experiencie-card");
  
    const tasksList = tasks.map(task => `<li>${task}</li>`).join("");
  
    card.innerHTML = `
      <h3>${company}</h3>
      <h4>${role}</h4>
      <p class="date">${date}</p>
      <ul>${tasksList}</ul>
    `;
  
    return card;
  }