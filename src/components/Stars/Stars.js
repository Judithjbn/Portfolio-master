export function starsBG() {
    const starsContainer = document.createElement("div");
    starsContainer.id = "stars-container";
    document.body.appendChild(starsContainer);
  
    const totalStars = 100;
  
    for (let i = 0; i < totalStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
  
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDelay = `${Math.random() * 2}s`;
  
      starsContainer.appendChild(star);
    }
  }