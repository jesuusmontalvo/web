const body = document.body;
const toggleButton = document.getElementById('theme-toggle-btn');
const slicer = document.getElementById('slicer');
const container_slicer = document.getElementById("container_slicer")
const moon_icon = document.getElementById("moon_icon")

toggleButton.addEventListener('click', () => {
  const currentTheme = body.dataset.theme;
  slicer.classList.toggle('dark');
  toggleButton.classList.toggle('dark');
  moon_icon.style.color = 'black';
  body.dataset.theme = currentTheme === "light" ? "dark" : "light";
});

const canvas = document.getElementById('background');
const contexto = canvas.getContext('2d');
const nodos = [];
const maxnodos = 200;
const maxDistancia = 100; 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


class Star {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radio = Math.random() * 2 + 1;
    this.dx = (Math.random() - 0.5) * 1.5; 
    this.dy = (Math.random() - 0.5) * 1.5;
    this.opacidad = Math.random();
  }

  draw() {
    contexto.beginPath();
    contexto.arc(this.x, this.y, this.radio, 0, Math.PI * 10, false);
    contexto.fillStyle = `rgba(34, 133, 179, ${this.opacidad})`;
    contexto.fill();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

    this.draw();
  }
}

for (let i = 0; i < maxnodos; i++) {
  nodos.push(new Star());
}

function conectarNodos() {
  for (let i = 0; i < nodos.length; i++) {
    for (let j = i + 1; j < nodos.length; j++) {
      const dx = nodos[i].x - nodos[j].x;
      const dy = nodos[i].y - nodos[j].y;
      const distancia = Math.sqrt(dx * dx + dy * dy);

      if (distancia < maxDistancia) {
        contexto.beginPath();
        contexto.moveTo(nodos[i].x, nodos[i].y);
        contexto.lineTo(nodos[j].x, nodos[j].y);
        contexto.strokeStyle = `rgba(135, 206, 250, ${1 - distancia / maxDistancia})`;
        contexto.lineWidth = 0.8;
        contexto.stroke();
        contexto.closePath();
      }
    }
  }
}

function animate() {
  contexto.clearRect(0, 0, canvas.width, canvas.height);

  nodos.forEach(star => star.update());
  conectarNodos();

  requestAnimationFrame(animate);
}

canvas.addEventListener('click', (e) => {
  nodos.forEach(star => {
    const dx = star.x - e.clientX;
    const dy = star.y - e.clientY;
    const distancia = Math.sqrt(dx * dx + dy * dy);

    if (distancia < 50) {
      star.opacidad = 1; 
    }
  });
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

animate();