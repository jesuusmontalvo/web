const body = document.body;
const toggleButton = document.getElementById('theme-toggle-btn');
const slicer = document.getElementById('slicer');
const container_slicer = document.getElementById("container_slicer")
const moon_icon = document.getElementById("moon_icon")
// Alternar el tema
toggleButton.addEventListener('click', () => {
  const currentTheme = body.dataset.theme;
  slicer.classList.toggle('dark');
  toggleButton.classList.toggle('dark');
  moon_icon.style.color = 'black';
  body.dataset.theme = currentTheme === "light" ? "dark" : "light";
});