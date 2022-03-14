const intro = document.getElementById("intro");

const introContainer = document.createElement("span");
const introText = document.createTextNode("Welcome to the Treehouse!");

introContainer.appendChild(introText);
introContainer.style.color = 'yellow';

intro.appendChild(introContainer);