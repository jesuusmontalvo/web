const titleText = "Jesús Fernando Montalvo Olazabal"; // Texto del título
const subtitleText = "Jr. Machine Learning Engineer, Jr. Data Scientist y Matemático"; // Texto del subtítulo

const titleElement = document.querySelector('.title'); // Selecciona el elemento <h1>
const subtitleElement = document.querySelector('.subtitle'); // Selecciona el elemento <p>

let titleIndex = 0;
let subtitleIndex = 0;

// Función para escribir el título
function typeTitle() {
  if (titleIndex < titleText.length) {
    titleElement.textContent += titleText[titleIndex];
    titleIndex++;
    setTimeout(typeTitle, 150); // Controla la velocidad de tipeo para el título
  } else {
    setTimeout(typeSubtitle, 500); // Espera un momento y luego comienza el subtítulo
  }
}

// Función para escribir el subtítulo
function typeSubtitle() {
  if (subtitleIndex < subtitleText.length) {
    subtitleElement.textContent += subtitleText[subtitleIndex];
    subtitleIndex++;
    setTimeout(typeSubtitle, 100); // Controla la velocidad de tipeo para el subtítulo
  }
}

typeTitle(); // Inicia el efecto para el título
