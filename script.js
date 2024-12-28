const titleText = "Jesús Fernando Montalvo Olazabal"; // El texto a mostrar
const titleElement = document.querySelector('.title'); // Selecciona el elemento <h1> donde se mostrará el texto
let index = 0;

function typeText() {
  if (index < titleText.length) {
    titleElement.textContent += titleText[index]; // Agrega una letra a la vez
    index++;
    setTimeout(typeText, 150); // Controla la velocidad de tipeo
  }
}

typeText(); // Llama a la función para iniciar el efecto