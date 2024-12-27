const canvas = document.getElementById('neuralCanvas');
const ctx = canvas.getContext('2d');

// Configuración básica
const width = canvas.width;
const height = canvas.height;
const layers = [
    { count: 4, x: 100 },
    { count: 6, x: 300 },
    { count: 3, x: 500 },
    { count: 1, x: 700 }
];
const nodes = [];

// Crear nodos en capas
layers.forEach(layer => {
    const spacing = height / (layer.count + 1);
    for (let i = 0; i < layer.count; i++) {
        nodes.push({
            x: layer.x,
            y: (i + 1) * spacing,
            radius: 10,
            color: 'rgba(255, 255, 255, 0.8)',
        });
    }
});

// Animar conexiones entre nodos
function drawConnections() {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            if (nodes[i].x < nodes[j].x) {
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.stroke();
            }
        }
    }
}

// Dibujar nodos
function drawNodes() {
    nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
    });
}

// Animar cambios de color
function animate() {
    ctx.clearRect(0, 0, width, height);
    drawConnections();
    drawNodes();
    nodes.forEach(node => {
        node.color = `rgba(255, ${Math.random() * 255}, 255, 0.8)`;
    });
    requestAnimationFrame(animate);
}

animate();
