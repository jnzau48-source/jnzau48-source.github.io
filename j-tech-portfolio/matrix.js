/ ===============================
// J-TECH Dimensional Matrix Script
// ===============================

const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Font sizes and speeds per layer
const fontSizes = [18, 24, 32]; // far, middle, near
const speeds = [2, 4, 6];

const columnsLayers = [];
const dropsLayers = [];

// Initialize layers
for (let l = 0; l < 3; l++) {
  let columns = Math.floor(canvas.width / fontSizes[l]) * 2; // double columns
  columnsLayers.push(columns);
  const drops = Array(columns).fill(Math.floor(Math.random() * canvas.height / fontSizes[l]));
  dropsLayers.push(drops);
}

// Draw function
function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let l = 0; l < 3; l++) {
    const fontSize = fontSizes[l];
    ctx.font = fontSize + "px monospace";
    ctx.fillStyle = `rgba(0,255,0,${0.2 + 0.4*(l/2)})`;
    ctx.shadowColor = "#0F0";
    ctx.shadowBlur = 8;

    for (let i = 0; i < columnsLayers[l]; i++) {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      const x = i * fontSize / 2;
      const y = dropsLayers[l][i] * fontSize;
      const angleOffset = (l === 0 ? -0.3 : l === 2 ? 0.3 : 0);
      ctx.fillText(text, x + angleOffset * y, y);

      dropsLayers[l][i] += speeds[l] * (1 + l*0.2);
      if(dropsLayers[l][i] * fontSize > canvas.height) dropsLayers[l][i] = 0;
    }
  }
}

setInterval(draw, 50);

// ===============================
// PANEL ROTATION
// ===============================
const panels = document.querySelectorAll('.panel');
let current = 0;
panels[current].classList.add('active');

function showPanel(index) {
  panels.forEach((p, i) => {
    p.classList.remove('active');
    if(i === index) p.classList.add('active');
  });
}

window.addEventListener('wheel', e => {
  if(e.deltaY > 0) current = (current + 1) % panels.length;
  else current = (current - 1 + panels.length) % panels.length;
  showPanel(current);

  // Optional: far-wall logo effect
  const logo = document.getElementById('far-wall-logo');
  if(logo){
    logo.style.opacity = 0.2 + (current / panels.length) * 0.3;
    logo.style.transform = `translateX(-50%) scale(${0.8 + (current / panels.length) * 0.2})`;
  }
});

// ===============================
// WINDOW RESIZE
// ===============================
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
